import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { iCategory } from 'src/app/Models/iCategory';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  //formData: FormData;
  Category: iCategory = {} as iCategory;

  constructor(private categoryServ: CategoriesService, private router: Router) {
    //this.formData = new FormData();
  }

  selectImage(event: any): void {
    //const formData = new FormData();

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      //   this.images = file;
      console.log(file);

      //this.formData.set('photo', file);
    }
    // const file = files.item(0);
  }


  // addNewCategory(formDatae: FormData): void {
  //   console.log('ih adddddddddddd');
  //   console.log(formDatae);

  //   this.categoryServ.createCategory(formDatae).subscribe({
  //     next: () => {
  //       console.log('test creatttttttttttttt');

  //       this.router.navigate(['/categories']);
  //     },

  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  addNewCategory() {
    // const formData = new FormData();
    // formData.append('photo', this.images);
    //  console.log(this.Course.photo)
    //  console.log(this.Course)
    //  console.log('ih adddddddddddd')

    this.categoryServ.createCategory(this.Category).subscribe({
      next: (Category) => {
        console.log('test creatttttttttttttt');

        console.log(Category);

        this.router.navigate(['/categories']);
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}
