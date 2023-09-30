import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { iCategory } from '../Models/iCategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<iCategory[]> {
    return this.httpClient
      .get<iCategory>(`${environment.BaseApiURL}/categories`)
      .pipe(map((res: any) => res.data.documents));
  }

  deleteCategory(categoryId: number): Observable<void> {
    console.log('service', categoryId);
    return this.httpClient.delete<void>(
      `${environment.BaseApiURL}/categories/${categoryId}`
    );
  }
}
