import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService} from '../services/category.service';
import {CategoryModel} from '../model/CategoryModel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  addcategoryForm:FormGroup;
  categorymodel!:CategoryModel;
  amountexpense!: number;
  constructor(public router: Router,private expenseservice: CategoryService) { 
    this.addcategoryForm = new FormGroup({
    name: new FormControl('',Validators.required),

 });
}
  ngOnInit(): void {
    console.log("in Category");
  }

  get f() { return this.addcategoryForm.controls; }


  OnAdd()
  {
    if (this.addcategoryForm.invalid) {
      return;
    }
    
    this.categorymodel= new CategoryModel(this.f.name.value);


     this.expenseservice
      .addcategory(this.categorymodel)
       .pipe()
       .subscribe(
        data => {
          console.log(JSON.stringify(data));
         },
         error => {
           console.log("error");
        }
       );
      

  }


}


  

    

  