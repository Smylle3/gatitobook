import { SigninInterface } from '../home/signin/signinInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  defaultRouter: string = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {}

  auth(user: string, pass: string): Observable<any> {
    return this.httpClient.post(`${this.defaultRouter}user/login`, {
      userName: user,
      password: pass,
    });
  }

  signin(SigninInterface: SigninInterface): Observable<any> {
    return this.httpClient.post(`${this.defaultRouter}user/signup`, {
      SigninInterface,
    });
  }

  userVerify(): Observable<any> {
    return this.httpClient.get(`${this.defaultRouter}user/exists${userName}`)
  }
}
