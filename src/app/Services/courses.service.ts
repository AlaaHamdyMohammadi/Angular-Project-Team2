import { ICourse } from 'src/app/Models/iCourse';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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

  // searchCourses(
  //   searchTerm: string,
  //   page: number = 1,
  //   limit: number = 15
  // ): Observable<ICourse[]> {
  //   const params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('limit', limit.toString())
  //     .set('search', searchTerm); // Add a 'search' query parameter for the search term

  //   return this.httpClient
  //     .get<ICourse[]>(`${environment.BaseApiURL}/courses`, { params })
  //     .pipe(map((res: any) => res.data.courses));
  // }

  getAllCoursesBySearch(searchTerm: string): Observable<ICourse[]> {
    return this.getAllCourses().pipe(
      map((courses) =>
        courses.filter((course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
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
