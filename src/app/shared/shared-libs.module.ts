import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CookieModule } from 'ngx-cookie';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    InfiniteScrollModule,
    CookieModule.forRoot(),
    FontAwesomeModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
    InfiniteScrollModule,
    FontAwesomeModule
  ]
})
export class LeafListSharedLibsModule { }
