import { Component, OnInit } from '@angular/core';
import { EventManager } from '../../../shared';
import { Principal } from '../../../core';
import { User } from '../../../model/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-onboarding-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
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

  onExperienceClicked(aas) {
    this.eventManager.broadcast({ name: 'openExperienceDialog', value: aas });
  }
}
