import { Component, OnInit } from '@angular/core';
import { EventManager } from '../../../../shared/managers/event-manager.service';
import { LoginService } from '../../../../core/login/login.service';
import { StateStorageService } from '../../../../core/auth/state-storage.service';
import { Router } from '@angular/router';
import { SignupService } from '../../../../core/login/signup.service';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {
  isOpen = false;
  timerId: any;

  constructor(
    private eventManager: EventManager,
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
    private signupService: SignupService,
    private router: Router) { }

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.openDialog();
    }, 50);
  }

  openDialog() {
    clearInterval(this.timerId);
    this.isOpen = true;
  }

  onCloseButtonClicked() {
    this.eventManager.broadcast({ name: 'closeProfileDialog' });
  }

  logout() {
    this.loginService.logout();
    this.eventManager.broadcast({ name: 'closeProfileDialog' });
    this.router.navigate(['']);
  }
}
