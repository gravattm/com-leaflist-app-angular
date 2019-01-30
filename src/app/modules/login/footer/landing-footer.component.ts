import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '../../../shared/managers/event-manager.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.css']
})
export class LandingFooterComponent implements OnInit, OnDestroy {
  constructor(private eventManager: EventManager) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
