import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { UserDetails } from '../models/user-details.model';

@Injectable({
  providedIn: 'root',
})
export class ManageUserService {


  constructor(private http: HttpClient) {}

  fetchAllUsers() : Observable<any>{
    return this.http.get<UserDetails>('http://localhost:8082/user');
  }

  updateUser(User: UserDetails) : Observable<any>{
    return this.http.put<UserDetails>('http://localhost:8082/user/updateuser', User);
  }

  addUser(User: UserDetails): Observable<UserDetails> {
    console.log(User)
    return this.http.post<UserDetails>('http://localhost:8082/user/adduser',User);
  }

  fetchById(id: any): Observable<any> {
    return this.http.get<UserDetails>('http://localhost:8082/user/' + id);
  }
}
