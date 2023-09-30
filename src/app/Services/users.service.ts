import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { iUser } from '../Models/iUser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = {};

  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getAllUsers(): Observable<iUser[]> {
    let headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient
      .get<iUser>(`${environment.BaseApiURL}/users`, { headers })
      .pipe(map((res: any) => res.data.documents));
  }

  deleteUser(userId: number): Observable<void> {
    console.log('service', userId);
    return this.httpClient.delete<void>(
      `${environment.BaseApiURL}/users/${userId}`
    );
  }
}
