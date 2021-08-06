import { Component, OnInit, Type } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { LoginModel } from '../app/model/LoginModel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//import { Login } from '../model/loginmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "shipmnt-task";

  ngOnInit() {

  };
  constructor() { }

}

