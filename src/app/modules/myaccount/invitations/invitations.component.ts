import { Component, OnInit } from '@angular/core';
import { EventManager } from '../../../shared/managers/event-manager.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {
  invitations: Object = {
    'sample': 'sample'
  };

  constructor(private eventManager: EventManager) { }

  ngOnInit() { }

  onInvitationClicked() {
    this.eventManager.broadcast({ name: 'openInvitationDialog' });
  }
}
