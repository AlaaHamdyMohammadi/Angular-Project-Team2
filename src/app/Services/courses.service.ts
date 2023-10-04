import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICourse } from '../Models/iCourse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  http = {};
  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getAllCourses(page: number = 1, limit: number = 15): Observable<ICourse[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.httpClient
      .get<ICourse[]>(`${environment.BaseApiURL}/courses`, { params })
      .pipe(map((res: any) => res.data.courses));
  }

  getCourseById(courseId: number): Observable<ICourse> {
    return this.httpClient.get<ICourse>(
      `${environment.BaseApiURL}/courses/${courseId}`
    );
  }

  creatCourse(newCourse: FormData): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.BaseApiURL}/courses`,
      newCourse
    );
  }

  //
  updateCourse(updateCourse: FormData, id: number) {
    console.log('in service', id);
    return this.httpClient.patch<any>(
      `${environment.BaseApiURL}/courses/${id}`,
      updateCourse
    );
  }
  //
  deleteCourse(removeCourseId: number): Observable<void> {
    console.log(removeCourseId);
    return this.httpClient.delete<void>(
      `${environment.BaseApiURL}/courses/${removeCourseId}`
    );
  }
}
