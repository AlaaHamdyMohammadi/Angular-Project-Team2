import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICourse } from '../Models/iCourse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getAllCourses(): Observable<ICourse[]> {
    return this.httpClient
      .get<ICourse[]>(`${environment.BaseApiURL}/courses`)
      .pipe(map((res: any) => res.data.courses));
  }
  getCourseById(courseId: number): Observable<ICourse> {
    return this.httpClient.get<ICourse>(
      `${environment.BaseApiURL}/courses/${courseId}`
    );
  }
}
