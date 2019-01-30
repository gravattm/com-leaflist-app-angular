import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/index';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchData: Subscription;
  searchString: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchData = this.route
      .params
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.searchString = params['searchString'] || '';
      });
  }
}
