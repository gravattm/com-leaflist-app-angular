import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LeafListSharedModule } from '../../shared';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { OnboardingComponent, OnboardingRoute } from './';
import { PersonalComponent } from './personal/personal.component';
import { ExperienceComponent } from './experience/experience.component';
import { RatingComponent } from './rating/rating.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ConnectionsComponent } from './connections/connections.component';
import { NonprofitComponent } from './nonprofit/nonprofit.component';
import { SummaryComponent } from './summary/summary.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  imports: [LeafListSharedModule, RouterModule.forChild([OnboardingRoute])],
  declarations: [
    ProgressComponent,
    OnboardingComponent,
    PersonalComponent,
    ExperienceComponent,
    RatingComponent,
    ConnectionsComponent,
    OrganizationsComponent,
    NonprofitComponent,
    SummaryComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter
    }
  ]
})
export class OnboardingModule { }
