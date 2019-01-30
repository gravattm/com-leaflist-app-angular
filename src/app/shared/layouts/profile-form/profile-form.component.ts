import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../core/data/data.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter;

  countryList: Array<Object>;
  stateList: Array<Object>;
  industryRoleList: Array<Object>;

  profileForm: FormGroup;
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);
  name = new FormControl('');
  address = new FormControl('');
  zipCode = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  state = new FormControl('', Validators.required);
  industryRoles = new FormArray([]);
  selectedIndustryRoles = new FormControl('', Validators.required);

  submitted = false;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCountryList();
    this.getStateList();
    this.getIndustryRoleList();
    this.initForm();
  }

  // get list of countries from json
  getCountryList(): void {
    this.dataService.getCountryList().subscribe(
      data => {
        this.countryList = data.body;
      }
    );
  }

  // get list of states from json
  getStateList(): void {
    this.dataService.getStateList().subscribe(
      data => {
        this.stateList = data.body;
      }
    );
  }

  // get list of industry role from json
  getIndustryRoleList(): void {
    this.dataService.getIndustryRoleList().subscribe(
      data => {
        this.industryRoleList = data.body;
        this.industryRoles = new FormArray(this.industryRoleList.map(c => new FormGroup
          ({
            id: new FormControl(c['id']),
            text: new FormControl(c['roleName']),
            checkbox: new FormControl(false)
          })));
        this.selectedIndustryRoles = new FormControl(this.mapItems(this.industryRoles.value), Validators.required);
        this.industryRoles.valueChanges.subscribe((v) => this.selectedIndustryRoles.setValue(this.mapItems(v)));
        this.profileForm.setControl(
          'industryRoles', this.industryRoles
        );
        this.profileForm.setControl(
          'selectedIndustryRoles', this.selectedIndustryRoles
        );
      }
    );
  }

  initForm(): void {
    this.profileForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      city: this.city,
      name: this.name,
      address: this.address,
      zipCode: this.zipCode,
      country: this.country,
      state: this.state,
      industryRoles: this.industryRoles,
      selectedIndustryRoles: this.selectedIndustryRoles
    });
  }

  mapItems(items) {
    const selectedItems = items.filter((item) => item.checkbox).map((item) => item.id);
    return selectedItems.length ? selectedItems : null;
  }

  onSubmit() {
    this.submitted = true;
    if (this.profileForm.valid) {
    } else {
    }
    this.submitForm.emit(this.profileForm.valid);
  }
}
