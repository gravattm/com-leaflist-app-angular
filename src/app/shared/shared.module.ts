import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LeafListSharedLibsModule, LeafListSharedCommonModule } from './';

import { HasAnyAuthorityDirective } from './directives';

import { NgbDateMomentAdapter } from './util';

import { QuestionComponent } from './layouts/question/question.component';
import { QuestionDashboardComponent } from './layouts/question/question-dashboard.component';
import { PersonCardComponent } from './layouts/person-card/person-card.component';
import { DirectRequestComponent } from './layouts/direct-request/direct-request.component';
import { ConnectionApprovalComponent } from './layouts/connection-approval/connection-approval.component';
import { TestimonialApprovalComponent } from './layouts/testimonial-approval/testimonial-approval.component';
import { NewsComponent } from './layouts//news/news.component';
import { IntroductionComponent } from './layouts//introduction/introduction.component';
import { ActivityComponent } from './layouts/activity/activity.component';
import { ProfileFormComponent } from './layouts/profile-form/profile-form.component';
import { ExperienceCardComponent } from './layouts/experience-card/experience-card.component';
import { OrganisationCardComponent } from './layouts/organisation-card/organisation-card.component';
import { PersonCardListComponent } from './layouts/person-card-list/person-card-list.component';
import { OrganisatonFormComponent } from './layouts/organisaton-form/organisaton-form.component';
import { OrganisatonMembersComponent } from './layouts/organisaton-members/organisaton-members.component';

@NgModule({
  imports: [
    LeafListSharedLibsModule,
    LeafListSharedCommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HasAnyAuthorityDirective,
    QuestionComponent,
    QuestionDashboardComponent,
    PersonCardComponent,
    ActivityComponent,
    ProfileFormComponent,
    ExperienceCardComponent,
    OrganisationCardComponent,
    DirectRequestComponent,
    ConnectionApprovalComponent,
    TestimonialApprovalComponent,
    NewsComponent,
    IntroductionComponent,
    PersonCardListComponent,
    OrganisatonFormComponent,
    OrganisatonMembersComponent
  ],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: NgbDateMomentAdapter
    }
  ],
  exports: [
    LeafListSharedCommonModule,
    HasAnyAuthorityDirective,
    QuestionComponent,
    QuestionDashboardComponent,
    PersonCardComponent,
    ActivityComponent,
    ProfileFormComponent,
    ExperienceCardComponent,
    OrganisationCardComponent,
    DirectRequestComponent,
    ConnectionApprovalComponent,
    TestimonialApprovalComponent,
    NewsComponent,
    IntroductionComponent,
    PersonCardListComponent,
    OrganisatonFormComponent,
    OrganisatonMembersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeafListSharedModule { }
