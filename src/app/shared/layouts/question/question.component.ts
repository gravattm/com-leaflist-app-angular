import { EventManager } from '../../../shared/managers/event-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  selectedResponse: string;
  items: Array<String> = ['Yes', 'Somewhat', 'No'];

  constructor(private eventManager: EventManager) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

  onSelect(item: string) {
    this.selectedResponse = item;
  }
}
