import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginModel } from '../model/LoginModel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  showErrorMsg: boolean;

  loginForm: FormGroup;
  authtoken: string;
  loginmodel!: LoginModel;

  //loginMaster: Login;
  submitted = false;

  ngOnInit() {
    console.log("here");
  };
  constructor(public router: Router, private loginService: LoginService) {

    this.authtoken = '';

    this.showErrorMsg = false;
    this.loginForm = new FormGroup({
      // user : new FormControl('', [Validators.required, this.usernameValidator.checkUsername.bind(this)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  get f() { return this.loginForm.controls; }

  onLoggedin() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log("here");

    this.loginmodel = new LoginModel(this.f.email.value, this.f.password.value);

    this.loginService
      .login(this.loginmodel)
      .pipe()
      .subscribe(
        data => {
          this.authtoken = data.token;
          localStorage.setItem('token', this.authtoken);
          
        },
        error => {
          console.log("error");
        }
      );


    console.log(JSON.stringify(localStorage.getItem("token")));
   
  }


}




