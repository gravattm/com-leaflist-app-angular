import { Component, OnInit } from '@angular/core';
import { EventManager } from '../../../shared';

import { Principal } from '../../../core';
import { User } from '../../../model/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-onboarding-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  user: User;

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
