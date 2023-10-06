import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { adminGuard } from './Guards/admin.guard';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { UpdateSubCategoryComponent } from './components/sub-categories/update-sub-category/update-sub-category.component';
import { AddCourseComponent } from './components/courses/AddCourse/add-course/add-course.component';
import { UpdateCourseComponent } from './components/courses/UpdateCourse/update-course/update-course.component';
import { InstructorsComponent } from './components/instructors/instructors.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, title: 'Login Page' },
  {
    path: 'courses',
    component: CoursesComponent,
    title: 'Courses Page',
    canActivate: [adminGuard],
  },
  {
    path: 'AddCourse',
    component: AddCourseComponent,
    title: 'Add Course Form ',
  },
  {
    path: 'UpdateCourse/:courseId',
    component: UpdateCourseComponent,
    title: 'Update Course Form ',
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users Page',
    canActivate: [adminGuard],
  },
  {
    path: 'instructors',
    component: InstructorsComponent,
    title: 'Instructors Page',
    canActivate: [adminGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Categories Page',
    canActivate: [adminGuard],
  },
  {
    path: 'AddCategory',
    component: AddCategoryComponent,
    title: 'Add Category Page',
    canActivate: [adminGuard],
  },
  {
    path: 'UpdateCategory/:categoryId',
    component: UpdateSubCategoryComponent,
    title: 'Update Category Page',
    canActivate: [adminGuard],
  },
  {
    path: 'subCategories',
    component: SubCategoriesComponent,
    title: 'SubCategories Page',
    canActivate: [adminGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
