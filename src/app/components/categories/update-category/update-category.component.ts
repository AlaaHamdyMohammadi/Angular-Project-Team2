import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iCategory } from 'src/app/Models/iCategory';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent {
  formData: FormData;

  constructor(
    private categoryServ: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formData = new FormData();
  }

  selectImage(event: any): void {
    // const formData = new FormData();

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      //   this.images = file;
      console.log(file);

      this.formData.append('photo', file);
    }
    // const file = files.item(0);
  }

  getImage(photo: String): String {
    console.log(photo);

    return `http://127.0.0.1:4000/img/categories/${photo}`;
  }

  Category: iCategory = {} as iCategory;
  categories: iCategory[] = [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['categoryId'];
      // Use the id in your component logic
      console.log('params', id);
      this.Category._id = id;
      console.log('categoryUpdate', this.Category._id);
      this.getCategoryInfo();
    });
  }

  getCategoryInfo() {
    this.categoryServ.getCategoryById(this.Category._id).subscribe((data: any) => {
      //console.log(data);
      this.Category = data.data.document;
      console.log(this.Category.photo);
    });
  }

  updateCategory(formDatae: any) {

    console.log('tttttttttttttttttttttttttttt', this.formData);
    this.formData.append('name', formDatae.value.name);
    this.formData.append('description', formDatae.value.description);

    console.log(formDatae);

    this.categoryServ.updateCategory(this.formData, this.Category._id).subscribe({
      next: () => {
        console.log(this.Category);
        this.router.navigate([`/categories`]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
