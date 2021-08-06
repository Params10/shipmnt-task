import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CategoryModel } from '../model/CategoryModel';

@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
      
    authorizationtoken !:string;
    

   
    API_URL='https://expense-manager-shipmnts.herokuapp.com/';

    constructor( private http: HttpClient) {
    
     }  
     
    addcategory(cmodel:CategoryModel):Observable<any>{
        this.authorizationtoken=JSON.stringify(localStorage.getItem("token"));
        this.authorizationtoken = this.authorizationtoken.slice(1, -1);
        let httpHeaders = new HttpHeaders({
         
        });

        httpHeaders = httpHeaders.set('authorization', this.authorizationtoken);
  
        console.log(httpHeaders.get("authorization"));
        console.log(this.authorizationtoken);
  
        return this.http.post(this.API_URL + 'api/v1/user/add_category', cmodel,{ 'headers': httpHeaders })
        .pipe();
      }
     getcategory(categoryname:string):Observable<any>
     {
        let httpHeaders = new HttpHeaders({     
        });
        this.authorizationtoken=JSON.stringify(localStorage.getItem("token"));
        httpHeaders.set('authorization', this.authorizationtoken);
  
        return this.http.get<Array<CategoryModel>>(this.API_URL + 'api/v1/user/categories',{ 'headers': httpHeaders })
        .pipe();
     }
  } 