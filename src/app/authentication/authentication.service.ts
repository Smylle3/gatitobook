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

  signin(
    user: string,
    email: string,
    name: string,
    pass: string
  ): Observable<any> {
    return this.httpClient.post(`${this.defaultRouter}user/signup`, {
      userName: user,
      fullName: name,
      password: pass,
      email: email,
    });
  }
}
