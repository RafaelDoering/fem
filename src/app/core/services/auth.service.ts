import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login() {
    return this.httpClient.post(`${environment.backendURL}employee/login`, { email: 'mariaeduardaf@gmail.com', senha: '0123456789' });
  }

  constructor(private httpClient: HttpClient) { }
}
