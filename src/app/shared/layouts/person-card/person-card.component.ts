import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  @Input() isInvitation = false;
  @Input() isNewRequest = false;

  constructor() { }

  ngOnInit() { }
}
