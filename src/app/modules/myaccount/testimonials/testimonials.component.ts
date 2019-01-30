import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-myaccount-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  myTestimonials: Object;
  givenTestimonials: Object;

  constructor() { }

  ngOnInit() { }
}
