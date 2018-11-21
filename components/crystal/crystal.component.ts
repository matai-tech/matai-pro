import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import * as THREE from 'three';

import { ATOM_ELEMENTS, ATOM_SIZES, ATOM_COLORS } from './crystal-config';

declare var require;

interface Vector {
  x: number;
  y: number;
  z: number;
}

@Component({
  selector: 'mta-crystal',
  template: `<div #container></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrystalComponent implements OnInit {
  renderer: THREE.WebGLRenderer;
  controls: any;
  camera: THREE.OrthographicCamera;
  scene: THREE.Scene;
  width: number;

  @ViewChild('container') node: ElementRef;

  // 将this.height与style.height.px绑定
  @HostBinding('style.height.px')
  @Input() height = 300;

  // 基本向量
  @Input() vectors: Vector[];

  // 原子
  @Input() points: any[];

  @Input() system = 'Direct';

  initObject() {
    if (!this.vectors) {
      console.warn('vectors is required');
      return;
    }

    // 长宽高
    const [l, w, h] = this.vectors.map(obj => Object.values(obj));
    const o    = new THREE.Vector3();
    const vl   = new THREE.Vector3(...l);
    const vw   = new THREE.Vector3(...w);
    const vh   = new THREE.Vector3(...h);
    const vlw  = new THREE.Vector3().add(vl).add(vw);
    const vlh  = new THREE.Vector3().add(vl).add(vh);
    const vwh  = new THREE.Vector3().add(vh).add(vw);
    const vlwh = new THREE.Vector3().add(vl).add(vw).add(vh);

    // 8个顶点
    const verticesOfCube: THREE.Vector3[] = [
      o, vl, vw,
      vh, vlw, vlh,
      vwh, vlwh
    ];

    // 6个面
    const indicesOfFaces: THREE.Face3[] = [
      new THREE.Face3(1, 4, 7), new THREE.Face3(7, 5, 1),   // front
      new THREE.Face3(0, 3, 6), new THREE.Face3(6, 2, 0),   // back
      new THREE.Face3(0, 1, 5), new THREE.Face3(5, 3, 0),   // left
      new THREE.Face3(2, 6, 7), new THREE.Face3(7, 4, 2),   // right
      new THREE.Face3(3, 5, 7), new THREE.Face3(7, 6, 3),   // top
      new THREE.Face3(0, 2, 4), new THREE.Face3(4, 1, 0)    // bottom
    ];

    // TODO: PolyhedronGeometry
    const geometryBody = new THREE.Geometry();
    geometryBody.vertices.push(...verticesOfCube);
    geometryBody.faces.push(...indicesOfFaces);

    const material = new THREE.MeshPhongMaterial({ color: 0x000000, transparent: true, opacity: 0.3, vertexColors: THREE.VertexColors });
    this.scene.add(new THREE.Mesh(geometryBody, material));

    // 12条线
    const geometryLine = new THREE.Geometry();

    geometryLine.vertices.push(
      o, vl, vl,  vlw, vlw, vw,
      vw, o, vh,  vlh, vlh, vlwh,
      vlwh, vwh, vwh,  vh, o, vh,
      vl, vlh, vw, vwh, vlw, vlwh
    );

    this.scene.add(
      new THREE.LineSegments(geometryLine, new THREE.LineBasicMaterial({ color: 0x444444 }))
    );

    this.scene.add(
      new THREE.LineSegments(geometryLine, new THREE.LineBasicMaterial({ color: 0xDDDDDD, transparent: true }))
    );

    // Atoms
    const geometryAtom = new THREE.SphereGeometry(1, 16, 16);
    for (const point of this.points) {
      const p = [point.x, point.y, point.z];
      // 原子的位置
      const pos = new THREE.Vector3()
        .addScaledVector(vl, p[0])
        .addScaledVector(vw, p[1])
        .addScaledVector(vh, p[2]);

      const index    = [...ATOM_ELEMENTS].findIndex(el => el === point.element);
      const size     = [...ATOM_SIZES][index] / 5;
      const color    = [...ATOM_COLORS][index];
      const meshTemp = new THREE.Mesh(geometryAtom, new THREE.MeshPhongMaterial({ color }));

      meshTemp.position.set(pos.x, pos.y, pos.z);
      meshTemp.scale.set(size, size, size);
      this.scene.add(meshTemp);
    }
  }

  initThree() {
    // 宽度默认撑满
    this.width = this.node.nativeElement.clientWidth;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.node.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0xFFFFFF, 0.9);
  }

  initCamera() {
    this.camera = new THREE.OrthographicCamera(this.width * -5 / this.height, this.width * 5 / this.height, 5, -5, 1, 2000);
    this.camera.position.set(65, 9, 10);
    /**
     * 注意lookAt的参数
     * https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js
     **/
    this.camera.lookAt(0, 0, 0);
  }

  /**
   * 进行鼠标操作
   * https://stackoverflow.com/a/42396798/7909869
   */
  initControl() {
    const orbitControls = require('three-orbit-controls')(THREE);
    this.controls = new orbitControls(this.camera, this.renderer.domElement);
    this.controls.minDistance = 2;
    this.controls.maxDistance = 50;
    this.controls.update();
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initLight() {
    const light = new THREE.DirectionalLight(0xFFFFFF);
    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.1);

    light.position.set(10, 10, 10);
    this.scene.add(light);
    this.scene.add(ambient);
  }

  // 帧循环、游戏循环
  animation() {
    this.renderer.render(this.scene, this.camera);
    // https://stackoverflow.com/questions/43466240/requestanimationframe-is-being-called-only-once
    requestAnimationFrame(this.animation.bind(this));
  }

  threeStart() {
    this.initThree();
    this.initCamera();
    this.initScene();
    this.initLight();
    this.initObject();
    this.initControl();
    this.animation();
  }

  ngOnInit() {
    this.threeStart();
  }
}
