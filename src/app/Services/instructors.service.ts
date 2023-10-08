import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { InstructorRole, iInstructor } from '../Models/iInstructor';

@Injectable({
  providedIn: 'root',
})
export class InstructorsService {
  http = {};

  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  totalInstructors(): Observable<iInstructor[]> {
    return this.httpClient
      .get<iInstructor>(`${environment.BaseApiURL}/users`)
      .pipe(
        map((res: any) => res.data.documents),
        map((users: iInstructor[]) =>
          users.filter((user) => user.role === InstructorRole.User)
        )
      );
  }

  getAllInstructors(page: number = 1, limit = 15): Observable<iInstructor[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.httpClient
      .get<iInstructor[]>(`${environment.BaseApiURL}/users`, { params })
      .pipe(
        map((res: any) => res.data.documents),
        map((instructors: iInstructor[]) =>
          instructors.filter(
            (instructor) => instructor.role === InstructorRole.Instructor
          )
        )
      );
  }

  getAllInstructorsBySearch(searchTerm: string): Observable<iInstructor[]> {
    return this.getAllInstructors().pipe(
      map((instructors) =>
        instructors.filter((instructor) =>
          instructor.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  deleteInstructors(instructorId: number): Observable<void> {
    console.log('service', instructorId);
    return this.httpClient.delete<void>(
      `${environment.BaseApiURL}/users/${instructorId}`
    );
  }
}
