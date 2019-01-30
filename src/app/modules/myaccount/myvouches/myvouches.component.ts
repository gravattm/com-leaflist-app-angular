import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-myvouches',
  templateUrl: './myvouches.component.html',
  styleUrls: ['./myvouches.component.css']
})
export class MyvouchesComponent implements OnInit {
  organisations: Object;

  constructor() { }

  ngOnInit() { }
}
