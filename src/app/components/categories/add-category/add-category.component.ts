import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { iCategory } from 'src/app/Models/iCategory';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  images: any;
  // multipleImages = [];
  formData: FormData;

  constructor(
    private categoriesServ: CategoriesService,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.formData = new FormData();
  }

  Category: iCategory = {} as iCategory;

  categories: iCategory[] = [];

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
    return `http://127.0.0.1:4000/img/categories/${this.file.name}`;
  }

  addNewCategory(formDatae: any): void {
    //console.log('tttttttttttttttttttttttttttt', this.formData);
    this.formData.append('name', formDatae.value.name);
    this.formData.append('description', formDatae.value.description);

    //console.log(this.formData);

    this.categoriesServ.creatCategory(this.formData).subscribe({
      next: () => {
        //console.log('test creatttttttttttttt');
        this.toaster.success('Successfully Added');
        this.router.navigate(['/categories']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
