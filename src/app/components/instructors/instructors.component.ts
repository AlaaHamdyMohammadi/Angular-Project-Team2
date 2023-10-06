import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { iInstructor } from 'src/app/Models/iInstructor';
import { InstructorsService } from 'src/app/Services/instructors.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css'],
})
export class InstructorsComponent implements OnInit {
  instructors: iInstructor[] = [];
  instructor: iInstructor = {} as iInstructor;
  page: number = 1;

  constructor(
    private instructorServ: InstructorsService,
    private spinner: NgxSpinnerService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.instructorPage();
  }

  instructorPage() {
    this.instructorServ.getAllInstructors(this.page).subscribe((data) => {
      console.log(data);
      this.instructors = data;
      this.spinner.hide();
    });
  }

  nextPage() {
    this.spinner.show();
    this.page++;
    this.instructorPage();
  }
  prevPage() {
    this.spinner.show();
    this.page--;
    this.instructorPage();
  }

  getImage(photo: string): string {
    return `http://127.0.0.1:4000/img/users/${photo}`;
  }

  deleteInstructors(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      this.instructorServ.deleteInstructors(id).subscribe({
        next: () => {
          this.toaster.success('Successfully Deleted');
          this.instructorServ.getAllInstructors().subscribe((data) => {
            this.instructors = data;
            //console.log('Done');
          });
          this.router.navigate(['/instructors']);
        },
        error: (err) => {
          console.log(err);
        },
      });
      //console.log("component", id);
    }
  }
}
