import { Component, OnInit } from '@angular/core';
import { iCategory } from 'src/app/Models/iCategory';
import { ICourse } from 'src/app/Models/iCourse';
import { iSubCategory } from 'src/app/Models/iSubCategory';
import { iUser } from 'src/app/Models/iUser';
import { CategoriesService } from 'src/app/Services/categories.service';
import { CoursesService } from 'src/app/Services/courses.service';
import { SubCategoriesService } from 'src/app/Services/sub-categories.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-abovr-charts',
  templateUrl: './abovr-charts.component.html',
  styleUrls: ['./abovr-charts.component.css']
})
export class AbovrChartsComponent  implements OnInit{
  constructor(private usersesServ: UsersService,private categorysesServ: CategoriesService,private subcategorysesServ: SubCategoriesService,private coursesServ: CoursesService){}
  users: iUser[] = [];
    categories:iCategory[]=[];
    subcategories:iSubCategory[]=[];
    courses:ICourse[]=[];


  ngOnInit(): void{
    this.usersesServ.getAllUsers().subscribe(data => {
      //console.log(data);
      this.users = data;
      //console.log(this.users.length);

    })

    this.categorysesServ.getAllCategories().subscribe(data => {
      //console.log(data);
      this.categories = data;
      //console.log(this.categories.length);

    })

    this.subcategorysesServ.getAllSubCategories().subscribe(data => {
      //console.log(data);
      this.subcategories = data;
      //console.log(this.subcategories.length);

    })
    this.coursesServ.totalCourses().subscribe(data => {
      console.log(data);
      this.courses = data;
      console.log(this.courses.length);

    })

  }


}
