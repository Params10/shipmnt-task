import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CategoryModel } from '../model/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URL = 'https://expense-manager-shipmnts.herokuapp.com/';

  constructor(private http: HttpClient) {

  }

  addcategory(cmodel: CategoryModel): Observable<any> {
    let authorizationtoken = JSON.stringify(localStorage.getItem("token"));
    authorizationtoken = authorizationtoken.slice(1, -1);
    let httpHeaders = new HttpHeaders({

    });

    httpHeaders = httpHeaders.set('authorization', authorizationtoken);

    // console.log(httpHeaders.get("authorization"));
  

    return this.http.post(this.API_URL + 'api/v1/user/add_category', cmodel, { 'headers': httpHeaders })
      .pipe();
  }
  getcategory(): Observable<any> {
  
    let authorizationtoken = JSON.stringify(localStorage.getItem("token"));
    console.log(authorizationtoken);
    authorizationtoken = authorizationtoken.slice(1, -1);
    console.log(authorizationtoken);
    
    let httpHeaders = new HttpHeaders({
    });
    //authorizationtoken = JSON.stringify(localStorage.getItem("token"));
    httpHeaders= httpHeaders.set('authorization', authorizationtoken);
    

    return this.http.get(this.API_URL + 'api/v1/user/categories', { 'headers': httpHeaders })
      .pipe();
  }
}