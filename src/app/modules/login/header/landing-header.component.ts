import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '../../../shared/managers/event-manager.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})
export class LandingHeaderComponent implements OnInit, OnDestroy {
  constructor(private eventManager: EventManager) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
