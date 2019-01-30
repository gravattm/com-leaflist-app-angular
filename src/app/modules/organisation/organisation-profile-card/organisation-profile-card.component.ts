import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../../core/data/data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-organisation-profile-card',
  templateUrl: './organisation-profile-card.component.html',
  styleUrls: ['./organisation-profile-card.component.css']
})
export class OrganisationProfileCardComponent implements OnInit {
  @ViewChild('addTestimonialForm') public addTestimonialForm: ElementRef;
  writeTestimonial = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.addTestimonialCurrentStatus.subscribe(response => this.writeTestimonial = response);
    this.dataService.setTestimonialElementRef(this.addTestimonialForm);
  }

  onClickAddTestimonial(): void {
    this.dataService.addTestimonial(true);
  }

  onCancel(): void {
    this.dataService.addTestimonial(false);
  }
}
