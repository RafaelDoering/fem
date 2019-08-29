import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login(email: string, password: string) {
    return this.httpClient.post(`${environment.backendURL}employee/login`, { email: email, senha: password });
  }

  constructor(private httpClient: HttpClient) { }
}
