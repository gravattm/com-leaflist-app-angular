import { Component, OnInit } from '@angular/core';
import { EventManager } from '../../../shared';
import { Principal } from '../../../core';
import { User } from '../../../model/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-onboarding-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
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

  onStratConnecting() {
    this.introDisabled = true;
  }
}
