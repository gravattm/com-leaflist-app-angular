import { Component, OnDestroy, OnInit } from '@angular/core';

import { LoginService } from '../../core/login/login.service';
import { StateStorageService } from '../../core/auth/state-storage.service';
import { Principal } from '../../core/auth/principal.service';
import { Router } from '@angular/router';
import { EventManager } from '../../shared/managers/event-manager.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  email: string;
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

  ngOnInit() {
    Promise.resolve(
      this.principal.identity().then(user => {
        if (user) {
          return true;
        } else {
          return false;
        }
      })).then(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['/dashboard']);
        }
      }
      );
  }

  ngOnDestroy() { }
}
