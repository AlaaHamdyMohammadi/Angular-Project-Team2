import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/Models/iCourse';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-detials',
  templateUrl: './detials.component.html',
  styleUrls: ['./detials.component.css'],
})
export class DetialsComponent {
  constructor(
    private coursesServ: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: number = 0;
  currentprdIndex: number = 0;
  courses: ICourse[] = [];

  Course: ICourse = {} as ICourse;
  showMore: boolean = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  getImage(photo: String): String {
    //console.log(photo);

    return `http://127.0.0.1:4000/img/courses/${photo}`;
  }

  getCourseInfo() {
    this.coursesServ.getCourseById(this.Course._id).subscribe((data: any) => {
      this.Course = data.data.course;
      // console.log(this.Course.photo)
      //console.log(data.data.course);
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['courseId'];
      // Use the id in your component logic
      //console.log('params', this.id);
      this.Course._id = this.id;
      //console.log('courseDetialsID', this.Course._id);
      this.getCourseInfo();

      this.coursesServ.getAllCourses().subscribe((data: any) => {
        this.courses = data;
        return data;
        // console.log(this.Course.photo)
        // console.log( data)
      });
    });
  }

  updateCourseCOMP(itemid: number) {
    //console.log(itemid);

    this.router.navigate([`UpdateCourse/${itemid}`]);
  }

  deleteCourse(itemid: number) {
    let confirmed = confirm('Do you want delete this');
    if (confirmed) {
      this.coursesServ.deleteCourse(itemid).subscribe();
      //console.log('Done');
      //console.log(itemid);

      this.router.navigate(['courses/']);

      this.coursesServ.getAllCourses().subscribe((data) => {
        this.courses = data;
        //console.log('Done');
      });
    }
  }

  ////////////////دايما بيقرأ 0/1
  previousPrd(ID: any) {
    this.currentprdIndex = this.courses.findIndex((course) => { return course._id == ID});
    //console.log(this.currentprdIndex);
    const PreID = this.courses[--this.currentprdIndex]._id;
    this.router.navigate([`/Detials/${PreID}`]);
  }

  nextPrd(ID: any) {
    this.currentprdIndex = this.courses.findIndex((course) => {
      return course._id == ID;
    });
    //console.log(this.currentprdIndex);
    const PreID = this.courses[++this.currentprdIndex]._id;
    this.router.navigate([`/Detials/${PreID}`]);
  }
}
