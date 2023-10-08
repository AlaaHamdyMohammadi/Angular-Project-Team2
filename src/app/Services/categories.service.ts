import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  getAllCategories(
    page: number = 1,
    limit: number = 15
  ): Observable<iCategory[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.httpClient
      .get<iCategory>(`${environment.BaseApiURL}/categories`, { params })
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

  getCategoryById(categoryId: number): Observable<iCategory> {
    return this.httpClient.get<iCategory>(
      `${environment.BaseApiURL}/categories/${categoryId}`
    );
  } 

  creatCategory(newCategory: FormData): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.BaseApiURL}/categories`,
      newCategory
    );
  }

  //
  updateCategory(updateCategory: FormData, id: number) {
    console.log('in service', id);
    return this.httpClient.patch<any>(
      `${environment.BaseApiURL}/categories/${id}`,
      updateCategory
    );
  }

  deleteCategory(categoryId: number): Observable<void> {
    console.log('service', categoryId);
    return this.httpClient.delete<void>(
      `${environment.BaseApiURL}/categories/${categoryId}`
    );
  }
}
