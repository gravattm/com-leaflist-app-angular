import { Directive, Host, HostListener, Input, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { ConfigService } from '../../core/config/config.service';
import { SortDirective } from './sort.directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[sortBy]'
})
export class SortByDirective implements AfterViewInit {

  @Input() sortBy: string;

  sortAscIcon = 'fa-sort-up';
  sortDescIcon = 'fa-sort-down';

  sort: SortDirective;

  constructor(@Host() sort: SortDirective, private el: ElementRef, private renderer: Renderer, configService: ConfigService) {
    this.sort = sort;
    const config = configService.getConfig();
    this.sortAscIcon = config.sortAscIcon;
    this.sortDescIcon = config.sortDescIcon;
  }

  ngAfterViewInit(): void {
    if (this.sort.predicate && this.sort.predicate !== '_score' && this.sort.predicate === this.sortBy) {
      this.applyClass();
    }
  }

  @HostListener('click') onClick() {
    if (this.sort.predicate && this.sort.predicate !== '_score') {
      this.sort.sort(this.sortBy);
      this.applyClass();
    }
  }

  private applyClass() {
    const childSpan = this.el.nativeElement.children[1];
    let add = this.sortAscIcon;
    let remove = this.sortDescIcon;
    if (!this.sort.ascending) {
      add = this.sortDescIcon;
      remove = this.sortAscIcon;
    }
    this.renderer.setElementClass(childSpan, remove, false);
    this.renderer.setElementClass(childSpan, add, true);
  }
}
