import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChemicalElement } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PeriodicTableService {
  selectedElements: any[] = []; // 选择的元素池
  currentElement; // 当前选中的元素
  elementChange$ = new Subject();
  // maxElLength: number; // 最大可以选择元素的个数
  // canSelectElements: string[] = []; // 关联可以选择的元素string[],例['h', 'li', 'be']

  constructor() {
  }

  change(e: ChemicalElement): void {
    const symbol = e.symbol;
    const index = this.selectedElements.indexOf(e.symbol);
    if (this.isSelected(e)) {
      this.selectedElements.splice(index, 1);
    } else {
      this.selectedElements.push(symbol);
      this.currentElement = e;
    }
    this.elementChange$.next(e);
  }

  isSelected(e: ChemicalElement): boolean {
    return this.selectedElements.indexOf(e.symbol) > -1;
  }

  reset(): void {
    this.selectedElements = [];
  }

  // setMaxLength(maxSelect: number) {
  //   this.maxElLength = maxSelect;
  // }

  // setCanSelectElements(elements: string[]) {
  //   this.canSelectElements = elements;
  // }
}
