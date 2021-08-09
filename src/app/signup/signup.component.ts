import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SignupService} from '../services/signup.service';
import { SignupModel } from '../model/SignupModel';
import { LoginModel } from '../model/LoginModel';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupModel!: SignupModel;
  loginModel!:LoginModel;
  authtoken!:string;
  constructor(public router: Router,private signupservice: SignupService,private loginservice:LoginService) { 


    this.signupForm = new FormGroup({
      user_name : new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    console.log("in signup");
  }

  get f() { return this.signupForm.controls; }

  OnSignUp()
  {
    if (this.signupForm.invalid) {
      return;
    }
    this.signupModel= new SignupModel(this.f.email.value,this.f.password.value,this.f.user_name.value);
    this.loginModel = new LoginModel(this.f.email.value,this.f.password.value);

    this.signupservice
      .signup(this.signupModel)
      .pipe()
      .subscribe(
        data => {
          this.router.navigate(['/login']); 
        },
        error => {
          console.log("error");
        }
      );
   
            
      this.signupForm.reset();

  }

}
