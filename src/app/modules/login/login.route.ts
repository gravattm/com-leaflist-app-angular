import { Route } from '@angular/router';
import { LoginComponent } from './login.component';

export const LoginRoute: Route = {
  path: '',
  component: LoginComponent,
  data: {
    authorities: [],
    pageTitle: 'LeafList'
  }
};
