import { Component, OnInit } from '@angular/core';
import { EventManager } from '../../../shared';

import { Principal } from '../../../core';
import { User } from '../../../model/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-onboarding-nonprofit',
  templateUrl: './nonprofit.component.html',
  styleUrls: ['./nonprofit.component.css']
})
export class NonprofitComponent implements OnInit {
  user: User;
  introDisabled = false;

  constructor(private principal: Principal, private eventManager: EventManager) { }

  ngOnInit() {
    this.principal.identity().then(user => {
      this.user = user;
    });
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  onViewNonProfit() {
    this.introDisabled = true;
  }
}
