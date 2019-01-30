import { Component, OnInit, Input } from '@angular/core';
import { EventManager } from '../../../shared/managers/event-manager.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-organisation-card',
  templateUrl: './organisation-card.component.html',
  styleUrls: ['./organisation-card.component.css']
})
export class OrganisationCardComponent implements OnInit {
  @Input() isVouchEnabled = false;
  @Input() isDoner = false;
  searchContent = '';

  constructor(private eventManager: EventManager) { }

  ngOnInit() { }

  onAlreadyDonerClicked(experience) {
    this.eventManager.broadcast({ name: 'openDonerDialog' });
  }
}
