import { Directive, Input, Output, Renderer, EventEmitter, ElementRef } from '@angular/core';
import { ConfigService } from '../../core/config/config.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[sort]'
})
export class SortDirective {
  @Input() predicate: string;
  @Input() ascending: boolean;
  @Input() callback: Function;

  sortIcon = 'fa-sort';
  sortAscIcon = 'fa-sort-up';
  sortDescIcon = 'fa-sort-down';
  sortIconSelector = 'span.fa';

  @Output() predicateChange: EventEmitter<any> = new EventEmitter();
  @Output() ascendingChange: EventEmitter<any> = new EventEmitter();

  element: any;

  constructor(el: ElementRef, renderer: Renderer, configService: ConfigService) {
    this.element = el.nativeElement;
    const config = configService.getConfig();
    this.sortIcon = config.sortIcon;
    this.sortAscIcon = config.sortAscIcon;
    this.sortDescIcon = config.sortDescIcon;
    this.sortIconSelector = config.sortIconSelector;
  }

  sort(field: any) {
    this.resetClasses();
    if (field !== this.predicate) {
      this.ascending = true;
    } else {
      this.ascending = !this.ascending;
    }
    this.predicate = field;
    this.predicateChange.emit(field);
    this.ascendingChange.emit(this.ascending);
    this.callback();
  }

  private resetClasses() {
    const allThIcons = this.element.querySelectorAll(this.sortIconSelector);
    // Use normal loop instead of forEach because IE does not support forEach on NodeList.
    for (let i = 0; i < allThIcons.length; i++) {
      allThIcons[i].classList.remove(this.sortAscIcon);
      allThIcons[i].classList.remove(this.sortDescIcon);
      allThIcons[i].classList.add(this.sortIcon);
    }
  }
}
