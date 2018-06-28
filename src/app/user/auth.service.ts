import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor() { }

  isLoggedIn(): boolean {
    if ( localStorage.getItem('user') !== null ) {
      return true;
    }
    return false;
  }

  getUser(): any {
    return {user:'usuario', guid: '343-4343-4343'};
  }
}
