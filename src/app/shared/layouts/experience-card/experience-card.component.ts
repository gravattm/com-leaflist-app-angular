import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventManager } from '../../../shared/managers/event-manager.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: Object;
  @Input() isOrgEditable = false;
  @Output() editClicked = new EventEmitter<boolean>();
  backgroundImg: SafeStyle;

  constructor(private eventManager: EventManager, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(' + this.experience['logo'] + ')');
  }

  onExperienceClicked(experience) {
    this.eventManager.broadcast({ name: 'openExperienceDialog', value: experience });
  }

  onEdit(): void {
    this.editClicked.emit(true);
  }
}
