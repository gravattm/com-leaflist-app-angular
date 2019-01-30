import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { DialogComponent } from './shared/layouts/dialog/login/login-dialog.component';
import { Subscription } from 'rxjs/index';
import { EventManager } from './shared/managers/event-manager.service';
import { Title } from '@angular/platform-browser';
import { ProfileDialogComponent } from './shared/layouts/dialog/profile/profile-dialog.component';
import { ExperienceDialogComponent } from './shared/layouts/dialog/experience/experience-dialog.component';
import { InvitationDialogComponent } from './shared/layouts/dialog/invitation/invitation-dialog.component';
import { DonerDialogComponent } from './shared/layouts/dialog/doner/doner-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'leaflist';

  showLoginDialog = false;
  showProfileDialog = false;
  showExperienceDialog = false;
  showInvitationDialog = false;
  showDonerDialog = false;

  experience: Object;

  @ViewChild(DialogComponent) loginDialog;
  @ViewChild(ProfileDialogComponent) profileDialog;
  @ViewChild(ExperienceDialogComponent) experienceDialog;
  @ViewChild(InvitationDialogComponent) invitationDialog;
  @ViewChild(DonerDialogComponent) donerDialog;

  openDialogSubscriber: Subscription;
  closeDialogSubscriber: Subscription;
  openProfileDialogSubscriber: Subscription;
  closeProfileDialogSubscriber: Subscription;
  openExperienceDialogSubscriber: Subscription;
  closeExperienceDialogSubscriber: Subscription;
  openInvitationDialogSubscriber: Subscription;
  closeInvitationDialogSubscriber: Subscription;
  openDonerDialogSubscriber: Subscription;
  closeDonerDialogSubscriber: Subscription;

  constructor(private router: Router, private eventManager: EventManager, private titleService: Title) { }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title: string =
      routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'LeafList';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.titleService.setTitle(this.getPageTitle(this.router.routerState.snapshot.root));
      }
    });

    this.openDialogSubscriber = this.eventManager.subscribe('openLoginDialog', response => this.openLoginDialog());
    this.closeDialogSubscriber = this.eventManager.subscribe('closeLoginDialog', response => this.closeLoginDialog());
    this.openProfileDialogSubscriber = this.eventManager.subscribe('openProfileDialog', response => this.openProfileDialog());
    this.closeProfileDialogSubscriber = this.eventManager.subscribe('closeProfileDialog', response => this.closeProfileDialog());
    this.openExperienceDialogSubscriber = this.eventManager.subscribe(
      'openExperienceDialog', response => this.openExperienceDialog(response)
    );
    this.closeExperienceDialogSubscriber = this.eventManager.subscribe('closeExperienceDialog', response => this.closeExperienceDialog());
    this.openInvitationDialogSubscriber = this.eventManager.subscribe('openInvitationDialog', response => this.openInvitationDialog());
    this.closeInvitationDialogSubscriber = this.eventManager.subscribe('closeInvitationDialog', response => this.closeInvitationDialog());
    this.openDonerDialogSubscriber = this.eventManager.subscribe('openDonerDialog', response => this.openDonerDialog());
    this.closeDonerDialogSubscriber = this.eventManager.subscribe('closeDonerDialog', response => this.closeDonerDialog());
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.openDialogSubscriber);
    this.eventManager.destroy(this.closeDialogSubscriber);
    this.eventManager.destroy(this.openProfileDialogSubscriber);
    this.eventManager.destroy(this.closeProfileDialogSubscriber);
    this.eventManager.destroy(this.openExperienceDialogSubscriber);
    this.eventManager.destroy(this.closeExperienceDialogSubscriber);
    this.eventManager.destroy(this.openInvitationDialogSubscriber);
    this.eventManager.destroy(this.closeInvitationDialogSubscriber);
    this.eventManager.destroy(this.openDonerDialogSubscriber);
    this.eventManager.destroy(this.closeDonerDialogSubscriber);
  }

  openLoginDialog() {
    this.showLoginDialog = true;
  }

  closeLoginDialog() {
    this.showLoginDialog = false;
  }

  openProfileDialog() {
    this.showProfileDialog = true;
  }

  closeProfileDialog() {
    this.showProfileDialog = false;
  }

  openExperienceDialog(sdfa) {
    this.showExperienceDialog = true;
  }

  closeExperienceDialog() {
    this.showExperienceDialog = false;
  }

  openInvitationDialog() {
    this.showInvitationDialog = true;
  }

  closeInvitationDialog() {
    this.showInvitationDialog = false;
  }

  openDonerDialog() {
    this.showDonerDialog = true;
  }

  closeDonerDialog() {
    this.showDonerDialog = false;
  }
}
