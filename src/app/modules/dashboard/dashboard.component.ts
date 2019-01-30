import { Component, OnInit } from '@angular/core';
import { EventManager } from '../../shared';
import { Principal } from '../../core';
import { User } from '../../model/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;

  directRequests: Object;
  connectionApprovals: Object;
  testimonialApprovals: Object;
  inTheNews: Object;
  introductions: Object;

  constructor(private principal: Principal, private eventManager: EventManager) { }

  ngOnInit() {
    this.principal.identity().then(user => {
      this.user = user;
    });
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }
}
