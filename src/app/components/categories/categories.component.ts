import { Component, OnInit } from '@angular/core';
import { iCategory } from 'src/app/Models/iCategory';
import { CategoriesService } from 'src/app/Services/categories.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: iCategory[] = [];
  constructor(
    private categoriesServ: CategoriesService,
    private spinner: NgxSpinnerService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.spinner.show();

    this.categoriesServ.getAllCategories().subscribe((data) => {
      //console.log(data);
      this.categories = data;
      this.spinner.hide();
    });
  }

  getImage(photo: string): string {
    return `http://127.0.0.1:4000/img/categories/${photo}`;
  }

  deleteCategory(id: number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this category?'
    );
    if (confirmDelete) {
      this.categoriesServ.deleteCategory(id).subscribe({
        next: () => {
          this.toaster.success('Successfully Deleted');
          this.categoriesServ.getAllCategories().subscribe((data) => {
            //console.log(data);
            this.categories = data;
          });
        },
      });
      //console.log('component', id);
      this.router.navigate(['/categories']);
    }
  }
}
