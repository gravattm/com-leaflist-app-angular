import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Principal } from '../../../core/auth/principal.service';
import { EventManager } from '../../../shared/managers/event-manager.service';
import { Subscription } from 'rxjs/index';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  directRequests: Object;
  connectionApprovals: Object;
  introductions: Object;
  connections: Object = {
    'sample': 'sample'
  };

  constructor(private principal: Principal, private eventManager: EventManager) { }

  ngOnInit() { }
}
