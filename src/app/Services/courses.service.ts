import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICourse } from '../Models/iCourse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getAllCourses(page: number = 1, limit: number = 15): Observable<ICourse[]> {
    const params = new HttpParams().set('page', page.toString()).set('limit', limit.toString())
    return this.httpClient
      .get<ICourse[]>(`${environment.BaseApiURL}/courses`, {params})
      .pipe(map((res: any) => res.data.courses));
  }
  getCourseById(courseId: number): Observable<ICourse> {
    return this.httpClient.get<ICourse>(
      `${environment.BaseApiURL}/courses/${courseId}`
    );
  }
  deleteCourse(courseId: number): Observable<void> {
    console.log('service', courseId);
    return this.httpClient.delete<void>(
      `${environment.BaseApiURL}/courses/${courseId}`
    );
  }
}
