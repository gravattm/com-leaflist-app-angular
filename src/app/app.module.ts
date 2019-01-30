import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LocalStorageService, Ng2Webstorage, SessionStorageService } from 'ngx-webstorage';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';

import { AuthInterceptor } from './core/blocks/interceptor/auth.interceptor';
import { EventManager } from './shared';
import { AuthExpiredInterceptor } from './core/blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './core/blocks/interceptor/errorhandler.interceptor';

import { LeafListAppRoutingModule } from './app-routing.module';
import { LeafListSharedModule } from './shared/shared.module';
import { LeafListAppCoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { HelpModule } from './modules/help/help.module';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { OnboardingModule } from './modules/onboarding/onboarding.module';
import { MyaccountModule } from './modules/myaccount/myaccount.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SearchModule } from './modules/search/search.module';
import { OrganisationModule } from './modules/organisation/organisation.module';

import { AppComponent } from './app.component';
import { NavRoute, NavbarComponent, ErrorComponent, SearchBarComponent } from './shared/layouts/';
import { DialogComponent } from './shared/layouts/dialog/login/login-dialog.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { ProfileDialogComponent } from './shared/layouts/dialog/profile/profile-dialog.component';
import { ExperienceDialogComponent } from './shared/layouts/dialog/experience/experience-dialog.component';
import { InvitationDialogComponent } from './shared/layouts/dialog/invitation/invitation-dialog.component';
import { MessageDialogComponent } from './shared/layouts/dialog/message/message-dialog.component';
import { DonerDialogComponent } from './shared/layouts/dialog/doner/doner-dialog.component';

import { getAuthServiceConfigs } from './core/config/social-login-config';

library.add(faFacebook, faTwitter, faGoogle, faPlus, faLinkedin, faPencilAlt);

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NavbarComponent,
    SearchBarComponent,
    DialogComponent,
    ProfileDialogComponent,
    ExperienceDialogComponent,
    InvitationDialogComponent,
    MessageDialogComponent,
    FooterComponent,
    DonerDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2Webstorage.forRoot({
      prefix: 'leaflist',
      separator: '-'
    }),
    NgbModule.forRoot(),
    LeafListAppRoutingModule,
    LeafListAppCoreModule,
    LeafListSharedModule,
    HomeModule,
    LoginModule,
    DashboardModule,
    OnboardingModule,
    MyaccountModule,
    HelpModule,
    RouterModule.forRoot([NavRoute], {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    FontAwesomeModule,
    ProfileModule,
    PasswordStrengthBarModule,
    SocialLoginModule,
    SearchModule,
    OrganisationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [LocalStorageService, SessionStorageService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
      deps: [Injector]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
      deps: [EventManager]
    },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
