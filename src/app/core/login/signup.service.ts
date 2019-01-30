import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';
import { SERVER_API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private http: HttpClient) { }


  forbiddenWords(): Observable<string[]> {
    return this.http.get<string[]>(SERVER_API_URL + 'api/forbiddenWords');
  }
}
