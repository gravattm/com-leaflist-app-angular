import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { ProfileComponent } from './profile.component';

const ChildRoutes = [];

export const ProfileRoute: Route = {
  path: 'profile',
  component: ProfileComponent,
  data: {
    requiresLogin: true,
    authorities: [],
    pageTitle: 'LeafList - Profile'
  },
  canActivate: [UserRouteAccessService]
};
