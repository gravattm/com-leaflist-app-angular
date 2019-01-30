import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { EventManager } from '../../../../shared/managers/event-manager.service';
import { StateStorageService } from '../../../../core/auth/state-storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-invitation-dialog',
  templateUrl: './invitation-dialog.component.html',
  styleUrls: ['./invitation-dialog.component.css']
})
export class InvitationDialogComponent implements OnInit {
  @Output() invitationFormSubmit = new EventEmitter<any>();
  @ViewChild('contentInvitation') contentRef: ElementRef;

  invitationForm: FormGroup;

  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  message = new FormControl('', Validators.required);

  currentYear: number = (new Date()).getFullYear();
  years: Array<number> = Array((this.currentYear + 1 - 1950)).fill(0).map((x, i) => 1950 + i);

  isOpen = false;
  timerId: any;
  closeResult: string;

  constructor(
    private eventManager: EventManager,
    private stateStorageService: StateStorageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.invitationForm = formBuilder.group({
      'firstName': this.firstName,
      'lastName': this.lastName,
      'email': this.email,
      'message': this.message
    });
  }

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.openDialog(this.contentRef);
    }, 50);
  }

  openDialog(content = null) {
    clearInterval(this.timerId);
    this.isOpen = true;
    this.modalService.open(content, { ariaLabelledBy: 'modal-invitaion' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.isOpen = false;
      this.invitationFormSubmit.emit(this.invitationForm.value);
      this.eventManager.broadcast({ name: 'closeInvitationDialog', value: this.invitationForm });
    }, (reason) => {
      this.isOpen = false;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.eventManager.broadcast({ name: 'closeInvitationDialog' });
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
