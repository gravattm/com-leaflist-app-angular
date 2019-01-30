import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { SearchComponent } from './search.component';

const ChildRoutes = [];

export const SearchRoute: Route = {
  path: 'search/:searchString',
  component: SearchComponent,
  data: {
    requiresLogin: true,
    authorities: [],
    pageTitle: 'LeafList - Search'
  },
  canActivate: [UserRouteAccessService],
  children: []
};
