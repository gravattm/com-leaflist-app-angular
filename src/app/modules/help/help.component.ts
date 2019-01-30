import { Component, OnDestroy, OnInit } from '@angular/core';

import { LoginService } from '../../core/login/login.service';
import { StateStorageService } from '../../core/auth/state-storage.service';
import { Principal } from '../../core/auth/principal.service';
import { Router } from '@angular/router';
import { EventManager } from '../../shared/managers/event-manager.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit, OnDestroy {
  credentials: any;

  constructor(
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
    private router: Router,
    private principal: Principal,
    private eventManager: EventManager
  ) {
    this.credentials = {};
  }

  ngOnInit() { }

  ngOnDestroy() { }
}
