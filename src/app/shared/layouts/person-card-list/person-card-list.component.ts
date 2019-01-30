import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-person-card-list',
  templateUrl: './person-card-list.component.html',
  styleUrls: ['./person-card-list.component.css']
})
export class PersonCardListComponent implements OnInit {
  @Input() isInvitation = false;

  constructor() { }

  ngOnInit() { }
}
