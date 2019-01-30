import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LeafListSharedModule } from '../../shared';
import { LoginComponent, LoginRoute } from './';
import { LandingHeaderComponent } from './header/landing-header.component';
import { DescriptionComponent } from './description/description.component';
import { LandingFooterComponent } from './footer/landing-footer.component';
import { SignUpButtonComponent } from '../../shared/layouts/signup/signup.component';
import { QuestionComponent } from '../../shared/layouts/question/question.component';

@NgModule({
  imports: [
    LeafListSharedModule,
    RouterModule.forChild([LoginRoute])
  ],
  declarations: [
    LoginComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
    DescriptionComponent,
    SignUpButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
