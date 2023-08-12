import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManageUserService {
  authServiceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.authService}`;

  constructor(private http: HttpClient) {}

  fetchAllUsers() {
    return this.http.get(`${this.authServiceUrl}/register`);
  }

  updateUser(formData: any) {
    return this.http.put(`${this.authServiceUrl}/register`, formData);
  }

  addUser(formData: any) {
    return this.http.post(`${this.authServiceUrl}/register`, formData);
  }

  fetchById(id: any): Observable<any> {
    return this.http.get(`${this.authServiceUrl}/register/${id}`);
  }
}
