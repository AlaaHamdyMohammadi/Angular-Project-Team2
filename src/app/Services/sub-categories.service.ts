import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { iSubCategory } from '../Models/iSubCategory';

@Injectable({
  providedIn: 'root',
})
export class SubCategoriesService {
  constructor(private httpClient: HttpClient) {}
  getAllSubCategories(): Observable<iSubCategory[]> {
    return this.httpClient
      .get<iSubCategory>(`${environment.BaseApiURL}/subCategories`)
      .pipe(map((res: any) => res.data.subCategories));
  }
  deleteSubCategory(subCategoryId: number): Observable<void> {
    console.log('service', subCategoryId);
    return this.httpClient.delete<void>(
      `${environment.BaseApiURL}/subCategories/${subCategoryId}`
    );
  }
}
