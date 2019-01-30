import { Injectable, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';
import { Observable, BehaviorSubject } from 'rxjs/index';

@Injectable({ providedIn: 'root' })
export class DataService {
  private addTestimonialStatus = new BehaviorSubject(false);
  private addTestimonialElement: ElementRef;
  addTestimonialCurrentStatus = this.addTestimonialStatus.asObservable();

  constructor(
    private principal: Principal,
    private authServerProvider: AuthServerProvider,
    private http: HttpClient
  ) { }

  getCountryList(): Observable<any> {
    return this.http.get('./src/assets/json/country.json', { observe: 'response' });
  }

  getStateList(): Observable<any> {
    return this.http.get('./src/assets/json/state.json', { observe: 'response' });
  }

  getIndustryRoleList(): Observable<any> {
    return this.http.get('./src/assets/json/industryRole.json', { observe: 'response' });
  }

  getPrivacyEmailList(): Observable<any> {
    return this.http.get('./src/assets/json/privacyEmails.json', { observe: 'response' });
  }

  addTestimonial(status: boolean) {
    this.addTestimonialStatus.next(status);
    this.addTestimonialElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  setTestimonialElementRef(el: ElementRef) {
    this.addTestimonialElement = el;
  }
}
