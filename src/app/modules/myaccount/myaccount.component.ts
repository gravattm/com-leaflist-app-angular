import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '../../shared';
import { Principal } from '../../core';
import { User } from '../../model/user.model';
import { MyaccountPage } from '../../model/myaccount.page.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/index';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit, OnDestroy {
  user: User;
  pages: MyaccountPage[] = [{
    label: 'Profile',
    segmentId: 'profile',
    canSkip: false
  }, {
    label: 'Connections',
    segmentId: 'connections',
    canSkip: true
  }, {
    label: 'Testimonials',
    segmentId: 'testimonials',
    canSkip: true
  }, {
    label: 'Activity',
    segmentId: 'activity',
    canSkip: true
  }, {
    label: 'My Vouches',
    segmentId: 'myvouches',
    canSkip: true
  }, {
    label: 'Opportunities',
    segmentId: 'opportunities',
    canSkip: true
  }, {
    label: 'Settings',
    segmentId: 'settings',
    canSkip: true
  }, {
    label: 'My Organizations',
    segmentId: 'organizations',
    canSkip: true
  }];
  currentPage: MyaccountPage = this.pages[0];
  currentIndex = 0;
  routerSubscription: Subscription;

  constructor(
    private principal: Principal,
    private eventManager: EventManager,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.principal.identity().then(user => {
      this.user = user;
    });

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentPage();
      }
    });

    this.updateCurrentPage();
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  private updateCurrentPage() {
    for (let i = 0; i < this.pages.length; i++) {
      const page = this.pages[i];
      if (this.router.url.toString().includes(page.segmentId)) {
        this.currentPage = page;
        this.currentIndex = i;
        break;
      }
    }
  }
}
