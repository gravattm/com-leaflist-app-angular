import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataService } from '../../../core/data/data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  privacyEmailList: Array<Object>;

  settingsForm: FormGroup;
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  newPassword = new FormControl('', Validators.required);
  newPasswordConfirm = new FormControl('', Validators.required);

  privacyForm: FormGroup;
  privacy = new FormControl('', Validators.required);
  privacyEmails = new FormArray([]);

  public barLabel = '';
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.getPrivacyEmailList();
    this.initForm();
  }

  initForm(): void {
    this.settingsForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
      newPassword: this.newPassword,
      newPasswordConfirm: this.newPasswordConfirm
    });
    this.privacyForm = this.formBuilder.group({
      privacy: this.privacy,
      privacyEmails: this.privacyEmails
    });
  }

  getPrivacyEmailList(): void {
    this.dataService.getPrivacyEmailList().subscribe(
      data => {
        this.privacyEmailList = data.body;
        this.privacyEmails = new FormArray(this.privacyEmailList.map(c => new FormGroup
          ({
            id: new FormControl(c['id']),
            text: new FormControl(c['emailType']),
            checkbox: new FormControl(false)
          })));
        this.privacyForm.setControl(
          'privacyEmails', this.privacyEmails
        );
      }
    );
  }
}
