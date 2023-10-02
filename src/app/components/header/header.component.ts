import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{
  isLoggedIn: boolean;

  constructor(private loginServ: LoginService, private router: Router){
    this.isLoggedIn = this.loginServ.isLogin;
  }

  ngOnInit(): void {
      this.loginServ.status().subscribe({
        next: (admin) =>{
          this.isLoggedIn = admin;
          //console.log(this.isLoggedIn);
        },error: (err) => {
          console.log(err);
        } 
      })
  }

  ngOnChanges(){
    console.log(this.isLoggedIn);
  }

  logout(){
    this.loginServ.logout();
    this.router.navigate(['/login'])
  }
}
