import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { InterceptorService } from './Services/interceptor.service';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/categories/update-category/update-category.component';
import { AddSubCategoryComponent } from './components/sub-categories/add-sub-category/add-sub-category.component';
import { UpdateSubCategoryComponent } from './components/sub-categories/update-sub-category/update-sub-category.component';
import { AddCourseComponent } from './components/courses/AddCourse/add-course/add-course.component';
import { UpdateCourseComponent } from './components/courses/UpdateCourse/update-course/update-course.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { SearchComponent } from './components/search/search.component';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { BarChartComponent } from './components/home/home/bar charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/home/home/line charts/line-chart/line-chart.component';
import { PieChartComponent } from './components/home/home/pie charts/pie-chart/pie-chart.component';
import { AbovrChartsComponent } from './components/home/home/first/abovr-charts/abovr-charts.component';
import { Bar2ChartsComponent } from './components/home/bar2-charts/bar2-charts.component';
import { HomeComponent } from './components/home/home/home.component';
import { DetialsComponent } from './components/Detials/detials/detials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    LoginPageComponent,
    CoursesComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    AddSubCategoryComponent,
    UpdateSubCategoryComponent,
    CoursesComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    InstructorsComponent,
    SearchComponent,
    HomeComponent,
    DetialsComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    AbovrChartsComponent,
    Bar2ChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
