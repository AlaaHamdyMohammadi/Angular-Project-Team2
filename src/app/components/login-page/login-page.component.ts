import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login, LoginResponse } from 'src/app/Models/login';
import { LoginService } from 'src/app/Services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  //adminLogin: boolean = false;

  // constructor(
  //   private formBilder: FormBuilder,
  //   private loginServ: LoginService
  // ) {
  //   this.loginForm = this.formBilder.group({
  //     email: ['', [Validators.required]],
  //     password: ['', [Validators.required, Validators.minLength(5)]],
  //   });
  // }
  // get email() {
  //   return this.loginForm.get('email');
  // }
  // get password() {
  //   return this.loginForm.get('password');
  // }

  constructor(
    private formBilder: FormBuilder,
    private loginServ: LoginService,
    private spinner: NgxSpinnerService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    //this.adminLogin = this.loginServ.isLogin;
  }

  createForm() {
    this.loginForm = this.formBilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      role: ['admin'],
    });
  }

  login() {
    this.spinner.show();
    this.loginServ.login(this.loginForm.value).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.toaster.success('Successfully logged in');
        this.router.navigate(['/courses']);
        this.spinner.hide();
      },
      (error) => {
        this.toaster.error('Login failed. Please check your credentials.');
        this.spinner.hide();
      }
    );
    //console.log(this.loginForm.value);
  }

  // logout(){
  //   this.loginServ.logout()
  // }
}
