import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@capacitor/storage';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { tap, map, switchMap, } from 'rxjs/operators';


const TOKEN_KEY = 'my-token';
const USER_DATA = 'user-data';
const API_URL = "https://api-core-dev.caronsale.de/api/v1";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  constructor(private http: HttpClient) {
    this.loadToken();

  }
  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: { email, password }): Observable<any> {

    let payload = { "password": credentials.password, "meta": "string" }

    return this.http.put(API_URL + `/authentication/` + credentials.email, payload, {}).pipe(
      map((res: any) => res.token),
      switchMap(token => {
        return from(Storage.set({ key: TOKEN_KEY, value: token }) && Storage.set({ key: USER_DATA, value: JSON.stringify(credentials) }));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.clear();
  }



}
