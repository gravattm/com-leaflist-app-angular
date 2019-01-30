import { Component, OnInit } from '@angular/core';
import { ExperienceData } from '../../../model/experience.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-profile-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: ExperienceData[] = [
    {
      organisation: 'Radiant Interactive LLC',
      title: 'Chief Technology Officer',
      // tslint:disable-next-line:max-line-length
      responsibilities: 'As CTO of Radiant Interactive, I provide technology, entrepreneurship, and business leadership for our internal initiatives as well as for our clients.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        'Radiant Interactive is proud to partner with Pearson Education, Oskar Blues, and many other businesses large and small.  See some of our work at http://www.radiantinteractive.com',
      startMonth: 'December',
      startYear: '2009',
      endMonth: '',
      endYear: '',
      isPresent: true,
      address: '',
      country: 'USA',
      state: 'Colorado',
      isCanabiesRelated: true,
      isCurrent: true,
      logo: 'https://storage.googleapis.com/leaflist-com.appspot.com/5170572363300864/bigleaf.-padding.png'
    }
  ];

  constructor() { }

  ngOnInit() { }
}
