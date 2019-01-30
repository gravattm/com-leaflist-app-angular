import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LeafListSharedModule } from '../../shared';
import { CommonModule } from '@angular/common';
import { OrganisationComponent, OrganisationRoute } from './';
import { EarnedBadgesComponent } from './earned-badges/earned-badges.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NetworkVouchesComponent } from './network-vouches/network-vouches.component';
import { MembersComponent } from './members/members.component';
import { OrganisationProfileCardComponent } from './organisation-profile-card/organisation-profile-card.component';

@NgModule({
  imports: [
    LeafListSharedModule,
    CommonModule,
    RouterModule.forChild([OrganisationRoute]),
  ],
  declarations: [
    OrganisationComponent,
    EarnedBadgesComponent,
    TestimonialsComponent,
    NetworkVouchesComponent,
    MembersComponent,
    OrganisationProfileCardComponent
  ]
})
export class OrganisationModule { }
