import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { OrganisationComponent } from './organisation.component';

const ChildRoutes = [];

export const OrganisationRoute: Route = {
  path: 'organization',
  component: OrganisationComponent,
  data: {
    requiresLogin: true,
    authorities: [],
    pageTitle: 'LeafList - Organization'
  },
  canActivate: [UserRouteAccessService]
};
