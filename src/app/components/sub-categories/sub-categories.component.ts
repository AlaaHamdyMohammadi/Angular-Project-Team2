import { Component } from '@angular/core';
import { iSubCategory } from 'src/app/Models/iSubCategory';
import { SubCategoriesService } from 'src/app/Services/sub-categories.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css'],
})
export class SubCategoriesComponent {
  subCategories: iSubCategory[] = [];
  constructor(
    private subCategoriesServ: SubCategoriesService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.spinner.show();

    this.subCategoriesServ.getAllSubCategories().subscribe((data) => {
      //console.log(data);
      this.subCategories = data;
      this.spinner.hide();
    });
  }

  deleteSubCategory(id: number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this category?'
    );
    if (confirmDelete) {
      this.subCategoriesServ.deleteSubCategory(id).subscribe({
        next: () => {
          confirm('Successfully Deleted');
          this.subCategoriesServ.getAllSubCategories().subscribe((data) => {
            //console.log(data);
            this.subCategories = data;
          });
        },
      });
      this.router.navigate(['/subCategories']);
    }
  }
}
