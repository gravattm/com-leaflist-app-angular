import { Component, OnInit } from '@angular/core';
import { EventManager } from '../../../managers/event-manager.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {
  isOpen = false;
  timerId: any;

  constructor(private eventManager: EventManager) { }

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.openDialog();
    }, 50);
  }

  openDialog(abc = null) {
    clearInterval(this.timerId);
    this.isOpen = true;
  }

  closeButtonClicked() {
    this.eventManager.broadcast({ name: 'closeExperienceDialog' });
    this.isOpen = false;
  }
}
