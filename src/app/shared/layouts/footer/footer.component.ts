import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '../../../shared/managers/event-manager.service';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor(private eventManager: EventManager) { }

  ngOnInit(): void {
    console.log('footer loaded');
  }

  ngOnDestroy(): void { }

  onClick() {
    const x = document.querySelector('#top');
    if (x) {
      x.scrollIntoView();
    }
  }
}
