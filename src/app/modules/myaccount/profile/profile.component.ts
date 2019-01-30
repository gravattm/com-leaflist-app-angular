import { Component, OnInit, ViewChild } from '@angular/core';
import { Principal } from '../../../core';
import { User } from '../../../model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('ngProfileForm') ngProfileForm: NgForm;

  user: User;
  countryList: Array<Object>;
  stateList: Array<Object>;
  industryRoleList: Array<Object>;

  constructor(private principal: Principal) { }

  ngOnInit() {
    this.principal.identity().then(user => {
      this.user = user;
    });
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  onSaveButton(isSubmitted) { }
}
