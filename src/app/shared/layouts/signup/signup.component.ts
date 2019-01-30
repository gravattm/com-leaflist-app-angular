import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '../../../shared/managers/event-manager.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-signup-button',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpButtonComponent implements OnInit, OnDestroy {
  constructor(private eventManager: EventManager) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

  onSignupClicked() {
    this.eventManager.broadcast({ name: 'openLoginDialog' });
  }
}
