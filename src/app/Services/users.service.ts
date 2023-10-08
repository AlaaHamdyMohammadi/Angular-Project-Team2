import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserRole, iUser } from '../Models/iUser';
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

  getAllUsers(page: number = 1, limit: number = 15): Observable<iUser[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.httpClient
      .get<iUser[]>(`${environment.BaseApiURL}/users`, { params })
      .pipe(
        map((res: any) => res.data.documents),
        map((users: iUser[]) =>
          users.filter((user) => user.role === UserRole.User)
        )
      );
  }

  // getAllUsers(): Observable<iUser[]> {
  //   return this.httpClient.get<iUser>(`${environment.BaseApiURL}/users`).pipe(
  //     map((res: any) => res.data.documents),
  //     map((users: iUser[]) =>
  //       users.filter((user) => user.role === UserRole.User)
  //     )
  //   );
  // }

  getAllUsersBySearch(searchTerm: string): Observable<iUser[]> {
    return this.getAllUsers().pipe(
      map((users) =>
        users.filter((user) =>
          user.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  deleteUser(userId: number): Observable<void> {
    console.log('service', userId);
    return this.httpClient.delete<void>(
      `${environment.BaseApiURL}/users/${userId}`
    );
  }
}
