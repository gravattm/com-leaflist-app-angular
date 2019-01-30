import { Component, Input, OnInit } from '@angular/core';
import { EventManager } from '../../../shared';
import { Principal } from '../../../core';
import { User } from '../../../model/user.model';
import { OnboardingStep } from '../../../model/onboarding.step.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-onboarding-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  user: User;
  _steps: OnboardingStep[];

  @Input('steps')
  set steps(steps: OnboardingStep[]) {
    this._steps = steps;
    this.updateCurrentIndex();
  }

  get steps() {
    return this._steps;
  }

  _currentStep: OnboardingStep = null;
  @Input('currentStep')
  set currentStep(currentStep: OnboardingStep) {
    this._currentStep = currentStep;
    this.updateCurrentIndex();
  }

  get currentStep() {
    return this._currentStep;
  }

  currentIndex = 0;

  constructor(private principal: Principal, private eventManager: EventManager) { }

  ngOnInit() {
    this.principal.identity().then(user => {
      this.user = user;
    });
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  updateCurrentIndex() {
    if (this._steps != null && this._currentStep != null) {
      for (let i = 0; i < this._steps.length; i++) {
        if (this._steps[i].segmentId === this._currentStep.segmentId) {
          this.currentIndex = i;
          break;
        }
      }
    }
  }
}
