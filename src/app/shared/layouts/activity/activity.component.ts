import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activities = [
    {
      points: 1,
      description: 'Question answered',
      pointDate: 'JUL 6, 2018'
    },
    {
      points: 1,
      description: 'Question answered',
      pointDate: 'JUL 7, 2018'
    },
    {
      points: 1,
      description: 'Question answered',
      pointDate: 'JUL 8, 2018'
    },
    {
      points: 1,
      description: 'Question answered',
      pointDate: 'JUL 10, 2018'
    },
    {
      points: 1,
      description: 'Question answered',
      pointDate: 'JUL 11, 2018'
    },
    {
      points: 1,
      description: 'Question answered',
      pointDate: 'JUL 12, 2018'
    }
  ];
  @Input() isCompactView: boolean;

  constructor() { }

  ngOnInit() { }
}
