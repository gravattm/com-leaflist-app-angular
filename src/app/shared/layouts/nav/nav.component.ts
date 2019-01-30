import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../../core/login/login.service';
import { Principal } from '../../../core/auth/principal.service';
import { Router } from '@angular/router';
import { VERSION } from '../../../app.constants';
import { EventManager } from '../../managers/event-manager.service';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs/index';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  faBars = faBars;
  faSearch = faSearch;
  isNavbarCollapsed: boolean;
  version: string;
  searchIsOpen = false;
  closeSearchBarSubscriber: Subscription;

  constructor(private loginService: LoginService,
    private principal: Principal,
    private router: Router,
    private eventManager: EventManager
  ) {
    this.version = VERSION ? 'v' + VERSION : '';
    this.isNavbarCollapsed = true;
  }

  ngOnInit() {
    this.closeSearchBarSubscriber = this.eventManager.subscribe('closeSearchBar', response => this.onCloseSearchBar());
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.closeSearchBarSubscriber);
  }

  onSearch(searchString) { }

  onLoginClicked() {
    this.eventManager.broadcast({ name: 'openLoginDialog' });
  }

  onSearchButtonClicked() {
    this.searchIsOpen = true;
    this.eventManager.broadcast({ name: 'openSearchBar' });
  }

  onCloseSearchBar() {
    this.searchIsOpen = false;
  }

  onProfileButtonClicked() {
    // not supporting yet
    /* this.eventManager.broadcast({name: 'openProfileDialog'}) */
  }

  isAuthenticated() {
    console.log('is authenticated: ' + this.principal.isAuthenticated());
    return this.principal.isAuthenticated();
  }
}
