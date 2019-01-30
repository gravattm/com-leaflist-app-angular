import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LeafListSharedModule } from '../../shared';
import { CommonModule } from '@angular/common';
import { ProfileComponent, ProfileRoute } from './';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ReputationComponent } from './reputation/reputation.component';
import { ExperienceComponent } from './experience/experience.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ConnectionsComponent } from './connections/connections.component';

@NgModule({
  imports: [
    LeafListSharedModule,
    CommonModule,
    RouterModule.forChild([ProfileRoute]),
  ],
  declarations: [
    ProfileComponent,
    ProfileCardComponent,
    ReputationComponent,
    ExperienceComponent,
    TestimonialsComponent,
    ConnectionsComponent
  ]
})
export class ProfileModule { }
