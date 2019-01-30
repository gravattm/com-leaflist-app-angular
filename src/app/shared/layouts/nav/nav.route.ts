import { Route } from '@angular/router';
import { NavbarComponent } from './nav.component';

export const NavRoute: Route = {
  path: '',
  component: NavbarComponent,
  outlet: 'navbar'
};
