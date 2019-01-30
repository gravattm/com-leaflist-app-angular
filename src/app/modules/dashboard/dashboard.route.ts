import { Route } from '@angular/router';
import { DashboardComponent } from './';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';

const ChildRoutes = [];

export const DashboardRoute: Route = {
  path: 'dashboard',
  component: DashboardComponent,
  data: {
    requiresLogin: true,
    authorities: [],
    pageTitle: 'LeafList - Dashboard'
  },
  canActivate: [UserRouteAccessService],
  children: ChildRoutes
};
