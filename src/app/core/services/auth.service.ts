import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user;

  public login(email: string, password: string) {
    return this.httpClient
      .post(`${environment.backendURL}employee/login`, { email: email, senha: password })
      .pipe(
        tap((res) => {
          this.user = res;
          localStorage.setItem('user', JSON.stringify(this.user));
        })
      );
  }

  public initializeApp() {
    this.user = JSON.parse(localStorage.getItem('user'));

    if(!this.user){
      this.router.navigateByUrl('/');
    }
  }

  public logout() {
    this.user = null;
    localStorage.removeItem('user');
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }
}
