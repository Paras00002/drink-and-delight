import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fetchFromSessionStorage(): User {
    throw new Error('Method not implemented.');
  }
  getRole(): any {
    throw new Error('Method not implemented.');
  }
  login(formData: any) {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
