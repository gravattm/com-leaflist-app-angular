import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';
import { SERVER_API_URL } from '../../app.constants';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  constructor(
    private principal: Principal,
    private authServerProvider: AuthServerProvider,
    private http: HttpClient
  ) { }

  get(): Observable<HttpResponse<Account>> {
    return this.http.get<Account>(SERVER_API_URL + 'api/question', { observe: 'response' });
  }

  getQuestionJSON(): Observable<any> {
    return this.http.get('./src/assets/json/questions.json', { observe: 'response' });
  }
}
