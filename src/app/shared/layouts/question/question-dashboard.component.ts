import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EventManager } from '../../../shared/managers/event-manager.service';
import { QuestionService } from '../../../core/question/question.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-question-dashboard',
  templateUrl: './question-dashboard.component.html',
  styleUrls: ['./question-dashboard.component.css']
})
export class QuestionDashboardComponent implements OnInit, OnDestroy {
  selectedResponse: string;
  question: Object;
  suggestQuestionVisible = false;
  suggestQuestionSuccessMsg = false;

  items: Array<String> = ['Yes', 'Somewhat', 'No'];

  constructor(private eventManager: EventManager, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  ngOnDestroy(): void { }

  // get random question
  getQuestion(): void {
    this.questionService.getQuestionJSON().subscribe(
      data => {
        this.question = data.body;
      }
    );
  }

  onSelect(item: string) {
    this.selectedResponse = item;
  }

  // enable question suggestion
  suggestQuestion(): void {
    this.suggestQuestionVisible = true;
    this.suggestQuestionSuccessMsg = false;
  }

  // skip current question
  skipQuestion(): void {
    this.suggestQuestionSuccessMsg = false;
    this.suggestQuestionVisible = false;
    this.getQuestion();
  }

  // submit current answer or new question
  onSubmit(): void {
    if (this.suggestQuestionVisible) {
      this.suggestQuestionVisible = false;
      this.suggestQuestionSuccessMsg = true;
    } else {
      // TO DO
    }
  }
}
