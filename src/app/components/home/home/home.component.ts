import { Component } from '@angular/core';
import { iCategory } from 'src/app/Models/iCategory';
import { ICourse } from 'src/app/Models/iCourse';
import { iInstructor } from 'src/app/Models/iInstructor';
import { iSubCategory } from 'src/app/Models/iSubCategory';
import { iUser } from 'src/app/Models/iUser';
import { CategoriesService } from 'src/app/Services/categories.service';
import { CoursesService } from 'src/app/Services/courses.service';
import { InstructorsService } from 'src/app/Services/instructors.service';
import { SubCategoriesService } from 'src/app/Services/sub-categories.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private usersesServ: UsersService,
    private instructorServ: InstructorsService,
    private categorysesServ: CategoriesService,
    private subcategorysesServ: SubCategoriesService,
    private coursesServ: CoursesService
  ) {}
  users: iUser[] = [];
  instructors: iInstructor[] = [];
  categories: iCategory[] = [];
  subcategories: iSubCategory[] = [];
  courses: ICourse[] = [];
  getImage(photo: String): String {
    //console.log(photo);

    return `http://127.0.0.1:4000/img/users/${photo}`;
  }

  getImageCAT(photo: String): String {
    //console.log(photo);

    return `http://127.0.0.1:4000/img/categories/${photo}`;
  }

  ngOnInit(): void {
    this.usersesServ.getAllUsers().subscribe((data) => {
      //console.log(data);
      this.users = data;
      //console.log(this.users.length);
    });
    this.instructorServ.getAllInstructors().subscribe((data) => {
      //console.log(data);
      this.instructors = data;
      //console.log(this.users.length);
    });

    this.categorysesServ.getAllCategories().subscribe((data) => {
      //console.log(data);
      this.categories = data;
      //console.log(this.categories.length);
    });

    this.subcategorysesServ.getAllSubCategories().subscribe((data) => {
      //console.log(data);
      this.subcategories = data;
      //console.log(this.subcategories.length);
    });
    this.coursesServ.totalCourses().subscribe((data) => {
      console.log(data);
      this.courses = data;
      console.log(this.courses.length);
    });
  }
}
