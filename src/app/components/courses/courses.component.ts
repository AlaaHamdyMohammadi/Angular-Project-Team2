import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/Models/iCourse';
import { CoursesService } from 'src/app/Services/courses.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: ICourse[] = [];
  page: number = 1;
  constructor(
    private coursesServ: CoursesService,
    private spinner: NgxSpinnerService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.spinner.show();
    this.coursesPage();
  }

  coursesPage() {
    this.coursesServ.getAllCourses(this.page).subscribe((data) => {
      //console.log(data);
      this.courses = data;
      this.spinner.hide();
    });
  }

  nextPage(){
        this.spinner.show();
        this.page++;
        this.coursesPage();
  };

  prevPage(){
    this.spinner.show();
    this.page--;
    this.coursesPage();
  }

  getImage(photo: string): string {
    return `http://127.0.0.1:4000/img/courses/${photo}`;
  }

  deleteCourse(id: number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this Course?'
    );
    if (confirmDelete) {
      this.coursesServ.deleteCourse(id).subscribe({
        next: () => {
          this.toaster.success('Successfully Deleted');
          this.coursesServ.getAllCourses().subscribe((data) => {
            this.courses = data;
            //console.log('Done');
          });
          this.router.navigate(['/courses']);
        },
        error: (err) => {
          console.log(err);
        },
      });
      //console.log("component", id);
    }
  }
}
