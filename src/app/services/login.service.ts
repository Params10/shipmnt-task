import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {LoginModel} from '../model/LoginModel';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {

    API_URL='https://expense-manager-shipmnts.herokuapp.com/';

    constructor( private http: HttpClient) { }  

    login(lmodel:LoginModel):Observable<any>{

        console.log("Service");
  
        return this.http.post(this.API_URL + 'api/v1/login', lmodel)
        .pipe();
      }
  } 