import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const REG_API = 'http://localhost:8080/registration/';
const LOGIN_API = 'http://localhost:8080/login/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(LOGIN_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    return this.http.post(REG_API + 'register', {
      firstName,
      lastName,
      email,
      password
    }, httpOptions);
  }
}