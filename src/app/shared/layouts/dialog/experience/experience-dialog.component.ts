import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { EventManager } from '../../../../shared/managers/event-manager.service';
import { StateStorageService } from '../../../../core/auth/state-storage.service';
import { DataService } from '../../../../core/data/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { months } from 'moment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.css']
})
export class ExperienceDialogComponent implements OnInit {
  @Output() experienceFormSubmit = new EventEmitter<any>();
  @ViewChild('content') contentRef: ElementRef;

  countryList: Array<Object>;
  stateList: Array<Object>;
  months: Array<Object> = [
    { code: 'JAN', name: 'January' },
    { code: 'FEB', name: 'February' },
    { code: 'MAR', name: 'March' },
    { code: 'APR', name: 'April' },
    { code: 'MAY', name: 'May' },
    { code: 'JUN', name: 'June' },
    { code: 'JUL', name: 'July' },
    { code: 'AUG', name: 'August' },
    { code: 'SEP', name: 'September' },
    { code: 'OCT', name: 'October' },
    { code: 'NOV', name: 'November' },
    { code: 'DEC', name: 'December' }
  ];

  experienceForm: FormGroup;

  organisation = new FormControl('', Validators.required);
  title = new FormControl('', Validators.required);
  responsibilities = new FormControl('', Validators.required);
  canabiesRelated = new FormControl('');
  primaryPosition = new FormControl('');
  startMonth = new FormControl('', Validators.required);
  startYear = new FormControl('', Validators.required);
  endMonth = new FormControl('', Validators.required);
  endYear = new FormControl('', Validators.required);
  isPresent = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  state = new FormControl('', Validators.required);

  currentDate: Date = new Date;
  currentYear: number = this.currentDate.getFullYear();
  currentMonth: string = this.currentDate.toLocaleString('en-us', { month: 'long' });
  years: Array<number> = Array((this.currentYear + 1 - 1950)).fill(0).map((x, i) => 1950 + i);

  isOpen = false;
  timerId: any;
  closeResult: string;

  constructor(
    private dataService: DataService,
    private eventManager: EventManager,
    private stateStorageService: StateStorageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.openDialog(this.contentRef);
    }, 50);
    this.getCountryList();
    this.getStateList();
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

  initForm(): void {
    this.experienceForm = this.formBuilder.group({
      'organisation': this.organisation,
      'title': this.title,
      'responsibilities': this.responsibilities,
      'canabiesRelated': this.canabiesRelated,
      'primaryPosition': this.primaryPosition,
      'startMonth': this.startMonth,
      'startYear': this.startYear,
      'endMonth': this.endMonth,
      'endYear': this.endYear,
      'isPresent': this.isPresent,
      'address': this.address,
      'country': this.country,
      'state': this.state,
    });
  }

  openDialog(content = null) {
    clearInterval(this.timerId);
    this.isOpen = true;
    this.modalService.open(content, { ariaLabelledBy: 'modal-experience' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.isOpen = false;
      this.experienceFormSubmit.emit(this.experienceForm.value);
      this.eventManager.broadcast({ name: 'closeExperienceDialog', value: this.experienceForm });
      alert();
    }, (reason) => {
      this.isOpen = false;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.eventManager.broadcast({ name: 'closeExperienceDialog' });
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
