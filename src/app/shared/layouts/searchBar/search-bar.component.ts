import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Principal, LoginService } from '../../../core/';
import { VERSION } from '../../../app.constants';
import { EventManager } from '../../managers/event-manager.service';
import { Subscription } from 'rxjs/index';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() searchSubmit = new EventEmitter<string>();

  searchString: string;
  isOpen = false;
  openSearchBarSubscriber: Subscription;

  constructor(
    private loginService: LoginService,
    private principal: Principal,
    private router: Router,
    private eventManager: EventManager
  ) { }

  ngOnInit() {
    this.openSearchBarSubscriber = this.eventManager.subscribe('openSearchBar', response => this.onOpenSearchBar());
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.openSearchBarSubscriber);
  }

  onEnterPressed(event) {
    if (event.keyCode === 13) {
      this.router.navigate(['/search', this.searchString]);
      this.searchSubmit.emit(this.searchString);
    }
  }

  onOpenSearchBar() {
    this.isOpen = true;
  }

  onCloseClicked() {
    this.isOpen = false;
    this.eventManager.broadcast({ name: 'closeSearchBar' });
  }
}
