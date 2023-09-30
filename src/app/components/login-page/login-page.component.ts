import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/Models/login';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

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

  constructor(private formBilder: FormBuilder, private loginServ: LoginService){};

  ngOnInit(): void {
    this.createForm();
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
    this.loginServ.login(this.loginForm.value).subscribe(
      
    );
    console.log(this.loginForm.value);
  }
}
