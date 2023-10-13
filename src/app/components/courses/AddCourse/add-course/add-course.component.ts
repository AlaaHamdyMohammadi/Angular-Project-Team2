// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { iCategory } from 'src/app/Models/iCategory';
import { ICourse } from 'src/app/Models/iCourse';
import { iSubCategory } from 'src/app/Models/iSubCategory';
import { CategoriesService } from 'src/app/Services/categories.service';
import { CoursesService } from 'src/app/Services/courses.service';
import { SubCategoriesService } from 'src/app/Services/sub-categories.service';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  images: any;
  formData: FormData;

  constructor(
    private coursesServ: CoursesService,
    private categoriesServ: CategoriesService,
    private SubCategoriesServ: SubCategoriesService,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.formData = new FormData();
  }

  Course: ICourse = {} as ICourse;

  categories: iCategory[] = [];
  Subcategories: iSubCategory[] = [];

  ngOnInit(): void {
    // this.spinner.show();

    this.categoriesServ.getAllCategories().subscribe((data) => {
      //console.log('dataa categories', data);
      this.categories = data;
      // this.spinner.hide();
    });

    this.SubCategoriesServ.getAllSubCategories().subscribe((data) => {
      //console.log('dataa Subcategories', data);
      this.Subcategories = data;
      // this.spinner.hide();
    });
  }

  onOptionChange(event: any) {
    this.Course.categoryId = event.target.value;
    console.log(this.Course.categoryId);
    console.log(event.target.value);
  }

  onOptionChangeSUB(event: any) {
    this.Course.subCategory = event.target.value;
    console.log(this.Course.subCategory);
    console.log(event.target.value);
  }
  file: any = {};
  selectImage(event: any): void {
    // const formData = new FormData();

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      //   this.images = file;
      console.log(this.file.name);

      this.formData.append('photo', this.file);
    }
    // const file = files.item(0);
  }

  getImage(): String {
    return `http://127.0.0.1:4000/img/courses/${this.file.name}`;
  }

  // const title = this.formData.get('title');
  // const formData = new FormData();
  // for (let i in this.form_data.info) {
  //   formData.append(i,this.form_data.info[i]);
  // }
  addNewCourse(formDatae: any): void {
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
    this.formData.append('Level', formDatae.value.Level);
    this.formData.append('lectures', formDatae.value.lectures);
    this.formData.append('articles', formDatae.value.articles);
    this.formData.append('resources', formDatae.value.resources);
    this.formData.append('exercises', formDatae.value.exercises);
    this.formData.append('sections', formDatae.value.sections);
    this.formData.append('categoryId', formDatae.value.categoryId);
    this.formData.append('subCategory', formDatae.value.subCategory);

    console.log('ih adddddddddddd');
    console.log('categoryId', formDatae.value.categoryId);
    console.log('subCategory', formDatae.value.subCategory);

    console.log(formDatae.value.title);

    console.log(this.formData);

    this.coursesServ.creatCourse(this.formData).subscribe(
      {
        next: () => {
          this.toaster.success('Successfully Added');
          this.router.navigate(['/courses']);
        },

        error: (err) => {
          console.log(err);
        },
      }
    );
  }
}
