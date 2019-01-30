import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '../../../shared/managers/event-manager.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy {
  constructor(private eventManager: EventManager) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
