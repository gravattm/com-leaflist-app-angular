import { Route } from '@angular/router';
import { HomeComponent } from './';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';

const ChildRoutes = [];

export const HomeRoute: Route = {
  path: 'home',
  component: HomeComponent,
  data: {
    requiresLogin: true,
    authorities: [],
    pageTitle: 'LeafList'
  },
  canActivate: [UserRouteAccessService],
  children: ChildRoutes
};
