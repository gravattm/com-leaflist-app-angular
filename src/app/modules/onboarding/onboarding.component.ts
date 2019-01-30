import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '../../shared';
import { Principal } from '../../core';
import { User } from '../../model/user.model';
import { OnboardingStep } from '../../model/onboarding.step.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/index';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit, OnDestroy {
  user: User;
  steps: OnboardingStep[] = [{
    label: 'Personal Info',
    segmentId: 'personal',
    canSkip: false
  }, {
    label: 'Experience',
    segmentId: 'experience',
    canSkip: true
  }, {
    label: 'Rating System',
    segmentId: 'rating',
    canSkip: true
  }, {
    label: 'Connections',
    segmentId: 'connections',
    canSkip: true
  }, {
    label: 'Organizations',
    segmentId: 'organizations',
    canSkip: true
  }, {
    label: 'Non-Profit',
    segmentId: 'nonprofit',
    canSkip: true
  }, {
    label: 'Summary',
    segmentId: 'summary',
    canSkip: true
  }];
  currentStep: OnboardingStep = this.steps[0];
  currentIndex = 0;
  routerSubscription: Subscription;

  constructor(
    private principal: Principal,
    private eventManager: EventManager,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.principal.identity().then(user => {
      this.user = user;
    });

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentStep();
      }
    });

    this.updateCurrentStep();
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  private updateCurrentStep() {
    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps[i];
      if (this.router.url.toString().includes(step.segmentId)) {
        this.currentStep = step;
        this.currentIndex = i;
        break;
      }
    }
  }

  backButtonClicked() {
    let prevStep = null,
      firstStep = false;

    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps[i];
      if (step === this.currentStep) {
        if (i === 0) {
          firstStep = true;
        } else {
          prevStep = this.steps[i - 1];
        }
      }
    }

    if (prevStep != null) {
      this.router.navigate([prevStep.segmentId], { relativeTo: this.route });
    }
  }

  continueButtonClicked() {
    let nextStep = null,
      lastStep = false;

    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps[i];
      if (step === this.currentStep) {
        if (i < this.steps.length - 1) {
          nextStep = this.steps[i + 1];
        } else {
          lastStep = true;
        }
        break;
      }
    }

    if (nextStep != null) {
      this.router.navigate([nextStep.segmentId], { relativeTo: this.route });
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  skipButtonClicked() {
    this.router.navigate(['/dashboard']);
  }
}
