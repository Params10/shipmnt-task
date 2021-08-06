import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupModel } from '../model/SignupModel';


@Injectable({
    providedIn: 'root'
  })
  export class SignupService {

    API_URL='https://expense-manager-shipmnts.herokuapp.com/';

    constructor( private http: HttpClient) { }  

    login(smodel:SignupModel):Observable<any>{

        console.log("Service");
  
        return this.http.post(this.API_URL + 'api/v1/register', smodel)
        .pipe();
      }
  } 