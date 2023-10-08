import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iCategory } from 'src/app/Models/iCategory';
import { ICourse } from 'src/app/Models/iCourse';
import { iSubCategory } from 'src/app/Models/iSubCategory';
import { CategoriesService } from 'src/app/Services/categories.service';
import { CoursesService } from 'src/app/Services/courses.service';
import { SubCategoriesService } from 'src/app/Services/sub-categories.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {
  formData:FormData;

  constructor(private coursesServ: CoursesService, private router:Router
    ,private SubCategoriesServ:SubCategoriesService,
    private  categoriesServ:CategoriesService,
    private route: ActivatedRoute){
    this.formData = new FormData();

  }



  onOptionChange(event: any) {
    this.Course.categoryId = event.target.value;
    console.log(this.Course.categoryId)
    console.log(event.target.value)
  }


  onOptionChangeSUB(event: any) {
    this.Course.subCategory = event.target.value;
    console.log(this.Course.subCategory)
    console.log(event.target.value)
  }



  selectImage(event:any):void {
    // const formData = new FormData();

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
    //   this.images = file;
    console.log(file);

    this.formData.append('photo',file)

    }
// const file = files.item(0);
  }

  getImage(photo: String): String{
    console.log(photo);

    return `http://127.0.0.1:4000/img/courses/${photo}`;
  }

  Course:ICourse={}as ICourse;
  categories: iCategory[] = [] ;
  Subcategories: iSubCategory[] = [] ;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['courseId'];
      // Use the id in your component logic
      console.log('params',id);
      this.Course._id=id;
      console.log('courseUpdate',this.Course._id);
      this.getCourseInfo();


      this.categoriesServ.getAllCategories().subscribe((data) => {
        console.log('dataa categories',data);
        this.categories = data;
        // this.spinner.hide();
      });



      this.SubCategoriesServ.getAllSubCategories().subscribe((data) => {
        console.log('dataa Subcategories',data);
        this.Subcategories = data;
        // this.spinner.hide();
      });

    });
  }





  getCourseInfo() {
    this.coursesServ.getCourseById(this.Course._id)
      .subscribe((data: any) => {
        this.Course = data.data.course;
        console.log(this.Course.photo)
        console.log(data.data.course);
      });

  }


  updateCourse(formDatae:any){

    this.formData.append('title', formDatae.value.title);
    this.formData.append('subTitle', formDatae.value.subTitle);
    this.formData.append('instructor', formDatae.value.instructor);
    this.formData.append('BestSeller', formDatae.value.BestSeller);
    this.formData.append('rating', formDatae.value.rating);
    this.formData.append('NumRating', formDatae.value.NumRating);
    this.formData.append('duration', formDatae.value.duration);
    this.formData.append('description', formDatae.value.description);
    this.formData.append('content', formDatae.value.content);
    this.formData.append('priceType', formDatae.value.priceType);
    this.formData.append('price', formDatae.value.price);
    this.formData.append('DiscountPrice', formDatae.value.DiscountPrice);
    this.formData.append('percentageDis', formDatae.value.percentageDis);
    this.formData.append('lectures', formDatae.value.lectures);
    this.formData.append('articles', formDatae.value.articles);
    this.formData.append('resources', formDatae.value.resources);
    this.formData.append('exercises', formDatae.value.exercises);
    this.formData.append('sections', formDatae.value.sections);
    this.formData.append('Level', formDatae.value.Level);
    this.formData.append('categoryId', formDatae.value.categoryId);
    this.formData.append('subCategory', formDatae.value.subCategory);

    ///
     console.log('categoryId',formDatae.value.categoryId);
     console.log('subCategory',formDatae.value.subCategory);

     console.log(formDatae);

     console.log(formDatae.value.title);
    this.coursesServ.updateCourse(this.formData,this.Course._id).subscribe(
      {
        next:()=>{
          console.log(this.Course);
              this.router.navigate([`/Detials/${this.Course._id}`])
              // this.router.navigate([`/courses`])
        },

        error:(err)=>{
          console.log(err);

        }
      }
    )
  }

}
