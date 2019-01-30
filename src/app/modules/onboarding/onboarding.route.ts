import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { OnboardingComponent } from './onboarding.component';
import { PersonalComponent } from './personal/personal.component';
import { ExperienceComponent } from './experience/experience.component';
import { RatingComponent } from './rating/rating.component';
import { ConnectionsComponent } from './connections/connections.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { NonprofitComponent } from './nonprofit/nonprofit.component';
import { SummaryComponent } from './summary/summary.component';

const ChildRoutes = [];

export const OnboardingRoute: Route = {
  path: 'onboarding',
  component: OnboardingComponent,
  data: {
    requiresLogin: true,
    authorities: [],
    pageTitle: 'LeafList - Onboarding'
  },
  canActivate: [UserRouteAccessService],
  children: [

    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'personal'
    },
    {
      path: 'personal',
      component: PersonalComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - Onboarding - Personal Info'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'experience',
      component: ExperienceComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - Onboarding - Experience'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'rating',
      component: RatingComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - Onboarding - Rating System'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'connections',
      component: ConnectionsComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - Onboarding - Connections'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'organizations',
      component: OrganizationsComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - Onboarding - Organizations'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'nonprofit',
      component: NonprofitComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - Onboarding - Non-Profits'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'summary',
      component: SummaryComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - Onboarding - Summary'
      },
      canActivate: [UserRouteAccessService],
    }

  ]
};
