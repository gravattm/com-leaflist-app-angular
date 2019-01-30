import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../core/data/data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-organisation-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  addTestimonial: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  onAddTestimonialClick(): void {
    this.dataService.addTestimonial(true);
  }
}
