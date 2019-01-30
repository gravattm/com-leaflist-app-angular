import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-connection-approval',
  templateUrl: './connection-approval.component.html',
  styleUrls: ['./connection-approval.component.css']
})
export class ConnectionApprovalComponent implements OnInit {
  @Input() isDashboard = false;

  constructor() { }

  ngOnInit() { }
}
