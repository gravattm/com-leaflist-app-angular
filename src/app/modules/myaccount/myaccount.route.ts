import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { MyaccountComponent } from './myaccount.component';
import { ProfileComponent } from './profile/profile.component';
import { ConnectionsComponent } from './connections/connections.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ActivityComponent } from './activity/activity.component';
import { MyvouchesComponent } from './myvouches/myvouches.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { SettingsComponent } from './settings/settings.component';
import { MyOrganisationComponent } from './myorganisation/myorganisation.component';

const ChildRoutes = [];

export const MyaccountRoute: Route = {
  path: 'myaccount',
  component: MyaccountComponent,
  data: {
    requiresLogin: true,
    authorities: [],
    pageTitle: 'LeafList - My Account'
  },
  canActivate: [UserRouteAccessService],
  children: [

    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'profile'
    },
    {
      path: 'profile',
      component: ProfileComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - MyAccount - Profile'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'connections',
      component: ConnectionsComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - MyAccount - Connections'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'testimonials',
      component: TestimonialsComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - MyAccount - Testimonials'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'activity',
      component: ActivityComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - MyAccount - Activity'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'myvouches',
      component: MyvouchesComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - MyAccount - My Vouches'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'opportunities',
      component: OpportunitiesComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - MyAccount - Opportunities'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'settings',
      component: SettingsComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - MyAccount - Settings'
      },
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'organizations',
      component: MyOrganisationComponent,
      data: {
        requiresLogin: true,
        authorities: [],
        pageTitle: 'LeafList - MyAccount - My Organizations'
      },
      canActivate: [UserRouteAccessService],
    }
  ]
};
