import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { HelpComponent } from './help.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const HelpRoute: Route = {
  path: 'help',
  component: HelpComponent,
  data: {
    pageTitle: 'LeafList'
  },
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'about'
    },
    {
      path: 'about',
      component: AboutComponent,
      data: {
        pageTitle: 'LeafList - About Us'
      }
    },
    {
      path: 'contact',
      component: ContactComponent,
      data: {
        pageTitle: 'LeafList - Contact Us'
      }
    },
    {
      path: 'terms',
      component: TermsComponent,
      data: {
        pageTitle: 'LeafList - Terms of Service'
      }
    },
    {
      path: 'privacy',
      component: PrivacyComponent,
      data: {
        pageTitle: 'LeafList - Privacy Policy'
      }
    }
  ]
};

