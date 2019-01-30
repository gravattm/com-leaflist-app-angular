import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventManager } from '../../../../shared/managers/event-manager.service';
import { LoginService } from '../../../../core/login/login.service';
import { StateStorageService } from '../../../../core/auth/state-storage.service';
import { Router } from '@angular/router';
import { SignupService } from '../../../../core/login/signup.service';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leaflist-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild('contentLogin') contentRef: ElementRef;

  private user: SocialUser;
  private loggedIn: boolean;

  loginModalReference: any;

  authenticationError: boolean;
  email: string;
  password: string;
  signupPassword = '';
  rememberMe: boolean;

  public barLabel = '';
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];

  SIGNUP_BUTTON_TEXT = 'SignUp';
  SIGNUP_LABEL_TEXT = 'New to Leaflist';

  LOGIN_BUTTON_TEXT = 'Login';
  LOGIN_LABEL_TEXT = 'Already a member?';

  isLoginVisible = true;
  signUpLoginSwitchLabelText: string = this.SIGNUP_LABEL_TEXT;
  signUpLoginSwitchButtonText: string = this.SIGNUP_BUTTON_TEXT;

  passwordInputType = 'password';

  passwordStrength = '';

  forbiddenWords: any[];

  isOpen = false;
  timerId: any;
  closeResult: string;

  constructor(
    private eventManager: EventManager,
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
    private signupService: SignupService,
    private router: Router,
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.forbiddenWords = [];
    this.signupService.forbiddenWords().subscribe(forbiddenWords => {
      this.forbiddenWords = forbiddenWords;
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.eventManager.broadcast({ name: 'closeLoginDialog' });
      this.loginService.loginWithSocialNetwork(this.user);
    });

    this.timerId = setInterval(() => {
      this.openDialog(this.contentRef);
    }, 50);
  }

  openDialog(content = null) {
    clearInterval(this.timerId);
    this.isOpen = true;
    this.loginModalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-login' });
    this.loginModalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.eventManager.broadcast({ name: 'closeLoginDialog' });
      this.isOpen = false;
    }, (reason) => {
      this.eventManager.broadcast({ name: 'closeLoginDialog' });
      this.isOpen = false;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

  login() {
    this.loginService
      .login({
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      })
      .then(() => {
        this.authenticationError = false;
        // previousState was set in the authExpiredInterceptor before being redirected to login modal.
        // since login is succesful, go to stored previousState and clear previousState
        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
          this.stateStorageService.storeUrl(null);
          this.router.navigate([redirect]);
        } else {
          this.router.navigate(['/dashboard']);
          this.eventManager.broadcast({ name: 'closeLoginDialog' });
          this.isOpen = false;
        }
      })
      .catch(() => {
        this.authenticationError = true;
      });
  }

  switchLoginSignup() {
    this.isLoginVisible = !this.isLoginVisible;
    if (this.isLoginVisible) {
      this.signUpLoginSwitchLabelText = this.SIGNUP_LABEL_TEXT;
      this.signUpLoginSwitchButtonText = this.SIGNUP_BUTTON_TEXT;
    } else {
      this.signUpLoginSwitchLabelText = this.LOGIN_LABEL_TEXT;
      this.signUpLoginSwitchButtonText = this.LOGIN_BUTTON_TEXT;
    }
  }

  showPasswordChanged(event) {
    if (event.target.checked) {
      this.passwordInputType = 'text';
    } else {
      this.passwordInputType = 'password';
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
    this.loginModalReference.close();
  }

  signOut(): void {
    this.authService.signOut();
  }
}
