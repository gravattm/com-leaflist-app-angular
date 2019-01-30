import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../core/data/data.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-organisaton-form',
  templateUrl: './organisaton-form.component.html',
  styleUrls: ['./organisaton-form.component.css']
})
export class OrganisatonFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter;
  @Output() backOrCancel = new EventEmitter<boolean>();

  countryList: Array<Object>;
  stateList: Array<Object>;
  categoryList: Array<Object>;

  organisationForm: FormGroup;
  name = new FormControl('', Validators.required);
  contact = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  website = new FormControl('', Validators.required);
  countryCode = new FormControl('');
  phone = new FormControl('');
  address = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);
  zip = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  state = new FormControl('', Validators.required);
  logo = new FormControl('', Validators.required);
  employees = new FormControl('', Validators.required);
  yearEstablish = new FormControl('', Validators.required);
  isCanabiesRelated = new FormControl('', Validators.required);
  isNonProfit = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  categories = new FormArray([]);
  selectedCategories = new FormControl('', Validators.required);

  submitted = false;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCountryList();
    this.getStateList();
    this.getCategoryList();
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

  // get list of category from json
  getCategoryList(): void {
    this.dataService.getIndustryRoleList().subscribe(
      data => {
        this.categoryList = data.body;
        this.categories = new FormArray(this.categoryList.map(c => new FormGroup
          ({
            id: new FormControl(c['id']),
            text: new FormControl(c['roleName']),
            checkbox: new FormControl(false)
          })));
        this.selectedCategories = new FormControl(this.mapItems(this.categories.value), Validators.required);
        this.categories.valueChanges.subscribe((v) => this.selectedCategories.setValue(this.mapItems(v)));
        this.organisationForm.setControl(
          'categories', this.categories
        );
        this.organisationForm.setControl(
          'selectedCategories', this.selectedCategories
        );
      }
    );
  }

  initForm(): void {
    this.organisationForm = this.formBuilder.group({
      name: this.name,
      contact: this.contact,
      email: this.email,
      website: this.website,
      countryCode: this.countryCode,
      phone: this.phone,
      address: this.address,
      city: this.city,
      zipCode: this.zip,
      country: this.country,
      state: this.state,
      logo: this.logo,
      employees: this.employees,
      yearEstablish: this.yearEstablish,
      isCanabiesRelated: this.isCanabiesRelated,
      isNonProfit: this.isNonProfit,
      description: this.description,
      categories: this.categories,
      selectedCategories: this.selectedCategories
    });
  }

  mapItems(items) {
    const selectedItems = items.filter((item) => item.checkbox).map((item) => item.id);
    return selectedItems.length ? selectedItems : null;
  }

  onSubmit() {
    this.submitted = true;
    if (this.organisationForm.valid) {
    } else {
    }
    this.submitForm.emit(this.organisationForm.valid);
  }

  onCancel(): void {
    this.backOrCancel.emit(true);
  }
}
