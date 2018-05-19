import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from './auth/user';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AuthService {

  url = 'http://localhost:3000/api/';
  private localStorageTokenName = 'username';

  constructor(private http: HttpClient) { }

  logIn(usr: User): Observable<any> {
    return this.http.post<any>(this.url + 'auth/login', usr, httpOptions);
  }

  isSignedIn(): Observable<any> {
    const self = this;
    return this.http.get<any>(this.url + 'isSignedIn');
  }

  signOut(): void {
    localStorage.removeItem(this.localStorageTokenName);
  }

  setToken(token: any): void {
    if (token) {
      localStorage.setItem(this.localStorageTokenName, token);
    } else {
      localStorage.removeItem(this.localStorageTokenName);
    }
  }
}
