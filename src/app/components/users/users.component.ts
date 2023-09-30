import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { iUser } from 'src/app/Models/iUser';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: iUser[] = [];
  user: iUser = {} as iUser;

  constructor(
    private usersServ: UsersService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.spinner.show();

    this.usersServ.getAllUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
      this.spinner.hide();
    });
  }

  getImage(photo: string): string {
    return `http://127.0.0.1:4000/img/users/${photo}`;
  }

  deleteUser(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      this.usersServ.deleteUser(id).subscribe({
        next: () => {
          confirm('Successfully Deleted');
          this.usersServ.getAllUsers().subscribe((data) => {
            this.users = data;
            //console.log('Done');
          });
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.log(err);
        },
      });
      //console.log("component", id);
    }
  }
}

/*

*/
