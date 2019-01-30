import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-direct-request',
  templateUrl: './direct-request.component.html',
  styleUrls: ['./direct-request.component.css']
})
export class DirectRequestComponent implements OnInit {
  @Input() isDashboard = false;

  constructor() { }

  ngOnInit() { }
}
