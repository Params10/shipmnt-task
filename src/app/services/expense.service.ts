import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ExpenseModel } from '../model/ExpenseModel';

@Injectable({
    providedIn: 'root'
  })
  export class ExpenseService {
      
    authorizationtoken !:string;
    

   
    API_URL='https://expense-manager-shipmnts.herokuapp.com/';

    constructor( private http: HttpClient) {
    
     }  
     
    addexpense(emodel:ExpenseModel):Observable<any>{
        this.authorizationtoken=JSON.stringify(localStorage.getItem("token"));
        this.authorizationtoken = this.authorizationtoken.slice(1, -1);
        let httpHeaders = new HttpHeaders({
         
        });

        httpHeaders = httpHeaders.set('authorization', this.authorizationtoken);
  
        console.log(httpHeaders.get("authorization"));
        console.log(this.authorizationtoken);
  
        return this.http.post(this.API_URL + 'api/v1/user/add_expense', emodel,{ 'headers': httpHeaders })
        .pipe();
      }
     getexpense(categoryname:string):Observable<any>
     {
        let httpHeaders = new HttpHeaders({     
        });
        this.authorizationtoken=JSON.stringify(localStorage.getItem("token"));
        httpHeaders.set('authorization', this.authorizationtoken);
  
        return this.http.post<Array<ExpenseModel>>(this.API_URL + '/api/v1/user/expense_details/'+categoryname,{ 'headers': httpHeaders })
        .pipe();
     }
  } 