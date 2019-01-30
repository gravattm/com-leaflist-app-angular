import { Component, OnInit } from '@angular/core';
import { EventManager } from '../../../shared';

import { Principal } from '../../../core';
import { User } from '../../../model/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-onboarding-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  user: User;
  introDisabled = false;
  searchContent = '';

  constructor(private principal: Principal, private eventManager: EventManager) { }

  ngOnInit() {
    this.principal.identity().then(user => {
      this.user = user;
    });
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  onVouchNow() {
    this.introDisabled = true;
  }
}
