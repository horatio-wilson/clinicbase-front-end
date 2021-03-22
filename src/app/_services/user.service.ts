import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/dashboard/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getEmployeeBoard(): Observable<any> {
    return this.http.get(API_URL + 'employee', { responseType: 'text' });
  }

  getDoctorBoard(): Observable<any> {
    return this.http.get(API_URL + 'doctor', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getSuperAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'super-admin', { responseType: 'text' });
  }
}