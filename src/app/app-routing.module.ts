import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, title: 'Login Page' },
  { path: 'courses', component: CoursesComponent, title: 'Courses Page' },
  { path: 'users', component: UsersComponent, title: 'Users Page' },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Categories Page',
  },
  {
    path: 'subCategories',
    component: SubCategoriesComponent,
    title: 'SubCategories Page',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
