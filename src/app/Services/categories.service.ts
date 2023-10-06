import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { iCategory } from '../Models/iCategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  http = {};

  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getAllCategories(): Observable<iCategory[]> {
    return this.httpClient
      .get<iCategory>(`${environment.BaseApiURL}/categories`)
      .pipe(map((res: any) => res.data.documents));
  }

  getAllCategoriesBySearch(searchTerm: string): Observable<iCategory[]> {
    return this.getAllCategories().pipe(
      map((categories) =>
        categories.filter((category) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  deleteCategory(categoryId: number): Observable<void> {
    console.log('service', categoryId);
    return this.httpClient.delete<void>(
      `${environment.BaseApiURL}/categories/${categoryId}`
    );
  }

  // createCategory(newCategory: FormData): Observable<any> {
  //   return this.httpClient.post<any>(
  //     `${environment.BaseApiURL}/categories`,
  //     newCategory
  //   );
  // }

  createCategory(newCategory: iCategory): Observable<iCategory> {
    return this.httpClient.post<iCategory>(
      `${environment.BaseApiURL}/categories`,
      JSON.stringify(newCategory),
      this.http
    );
  }

  updateCategory(updateCategory: iCategory) {
    return this.httpClient.patch<iCategory>(
      `${environment.BaseApiURL}/categories/${updateCategory._id}`,
      JSON.stringify(updateCategory),
      this.http
    );
  }
}
