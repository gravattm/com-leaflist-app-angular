import { Component, OnInit } from '@angular/core';
import { Principal } from '../../../core/auth/principal.service';
import { User } from '../../../model/user.model';
import { EventManager } from '../../../shared/managers/event-manager.service';
import { ExperienceData } from '../../../model/experience.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  user: User;
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
      logo: null,
    }
  ];

  constructor(private principal: Principal, private eventManager: EventManager) { }

  ngOnInit() {
    this.principal.identity().then(user => {
      this.user = user;
    });
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  onExperienceClicked(aas) {
    this.eventManager.broadcast({ name: 'openExperienceDialog', value: aas });
  }
}
