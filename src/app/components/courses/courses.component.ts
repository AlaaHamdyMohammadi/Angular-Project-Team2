import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/Models/iCourse';
import { CoursesService } from 'src/app/Services/courses.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: ICourse[] = [];
  constructor(
    private coursesServ: CoursesService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.spinner.show();
    this.coursesServ.getAllCourses().subscribe((data) => {
      //console.log(data);
      this.courses = data;
      this.spinner.hide();
    });
  }

  getImage(photo: string): string {
    return `http://127.0.0.1:4000/img/courses/${photo}`;
  }
}
