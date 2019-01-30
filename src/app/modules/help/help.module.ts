import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeafListSharedModule } from '../../shared';
import { HelpComponent } from './help.component';
import { HelpRoute } from './help.route';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  imports: [
    LeafListSharedModule,
    RouterModule.forChild([HelpRoute])
  ],
  declarations: [
    HelpComponent,
    AboutComponent,
    ContactComponent,
    TermsComponent,
    PrivacyComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpModule { }
