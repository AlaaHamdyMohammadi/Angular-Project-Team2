import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(model: Login) {
    return this.httpClient.post(`${environment.BaseApiURL}/users/login`, model);
  }
}
