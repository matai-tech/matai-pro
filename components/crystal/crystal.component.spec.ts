import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalComponent } from './crystal.component';

describe('CrystalComponent', () => {
  let component: CrystalComponent;
  let fixture: ComponentFixture<CrystalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CrystalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrystalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should throw when vectors is undefined', () => {
    expect(() => {
      component.vectors = [];
      component.initObject();
    }).toThrowError();
  });
});
