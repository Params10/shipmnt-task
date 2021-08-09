import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService} from '../services/category.service';
import {CategoryModel} from '../model/CategoryModel';
import { delay } from "rxjs/operators";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  displayedColumns: string[] = ['categories'];
  categories!: Array<string>;
  addcategoryForm:FormGroup;
  categorymodel!:CategoryModel;
  amountexpense!: number;
  constructor(public router: Router,private categoryservice: CategoryService) { 
    this.addcategoryForm = new FormGroup({
    name: new FormControl('',Validators.required),

 });
}
  // ngOnChanges(): void {
  //  this.getcategories();
  // }
  
  ngOnInit(): void {
    console.log("in Category");
    this.getcategories();

    
  }

  get f() { return this.addcategoryForm.controls; }


  OnAdd()
  {
    if (this.addcategoryForm.invalid) {
      return;
    }
    
    this.categorymodel= new CategoryModel(this.f.name.value);

    this.categoryservice
    .addcategory(this.categorymodel)
     .pipe()
     .subscribe(
      data => {
        this.addcategoryForm.reset();
       },
       error => {
         console.log("error");
      }
     );
     this.ngOnInit();

     
   
  }
  dataSource !:Array<string>;
  getcategories()
  {
    this.categoryservice
      .getcategory()
       .pipe()
       .subscribe(
        data => {
          this.categories=data.categories;
          this.dataSource = this.categories;
          console.log(this.categories);
          console.log(this.categories instanceof Array);

          console.log(this.dataSource);
         },
         error => {
           console.log("error");
        }
       );



}



  
}
    

  