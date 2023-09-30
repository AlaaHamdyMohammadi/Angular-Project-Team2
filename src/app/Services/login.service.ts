import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Login } from '../Models/login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoginBehavior:BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient) {
    this.isLoginBehavior = new BehaviorSubject<boolean>(this.isLogin);
  }

  get isLogin(): boolean{
    return(localStorage.getItem('token')) ? true : false;
  }


  login(model: Login) {
    return this.httpClient.post(`${environment.BaseApiURL}/users/login`, model);
  }

  logout(){
    localStorage.removeItem('token');
  }

  status():Observable<boolean>{
    return this.isLoginBehavior.asObservable();
  }
}
