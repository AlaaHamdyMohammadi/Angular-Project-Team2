import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/Models/iCourse';
import { CoursesService } from 'src/app/Services/courses.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: ICourse[] = [];
  searchTerm = '';
  page: number = 1;
  constructor(
    private coursesServ: CoursesService,
    private spinner: NgxSpinnerService,
    private toaster: ToastrService,
    activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.coursesServ
          .getAllCoursesBySearch(params.searchTerm)
          .subscribe((courses) => {
            this.courses = courses;
          });
      } else {
        this.coursesServ.getAllCourses().subscribe((courses) => {
          this.courses = courses;
        });
      }
    });
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    })
  }
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

  nextPage() {
    this.spinner.show();
    this.page++;
    this.coursesPage();
  }

  prevPage() {
    this.spinner.show();
    this.page--;
    this.coursesPage();
  }

  getImage(photo: string): string {
    return `http://127.0.0.1:4000/img/courses/${photo}`;
  }

  searchResult(course: string):void{
    if(course){
      this.router.navigateByUrl(`/search/${course}`)
    }
  }

  AddCourseCOMP() {
    this.router.navigate(['AddCourse/']);
  }

  updateCourseCOMP(itemid: number) {
    console.log(itemid);

    this.router.navigate([`UpdateCourse/${itemid}`]);
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
