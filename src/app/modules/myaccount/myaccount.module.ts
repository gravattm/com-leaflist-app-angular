import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeafListSharedModule } from '../../shared';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { MyaccountComponent, MyaccountRoute } from './';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ActivityComponent } from './activity/activity.component';
import { MyvouchesComponent } from './myvouches/myvouches.component';
import { SettingsComponent } from './settings/settings.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { MyOrganisationComponent } from './myorganisation/myorganisation.component';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';

@NgModule({
  imports: [
    LeafListSharedModule,
    RouterModule.forChild([MyaccountRoute]),
    FormsModule,
    ReactiveFormsModule,
    PasswordStrengthBarModule
  ],
  declarations: [
    MyaccountComponent,
    ProfileComponent,
    ExperienceComponent,
    ConnectionsComponent,
    ActivityComponent,
    MyvouchesComponent,
    SettingsComponent,
    InvitationsComponent,
    MyOrganisationComponent,
    TestimonialsComponent,
    OpportunitiesComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }
  ]
})
export class MyaccountModule { }
