import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService} from '../services/expense.service';
import { ExpenseModel} from '../model/ExpenseModel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  addexpenseForm:FormGroup;
  expensemodel!:ExpenseModel;
  amountexpense!: number;
  constructor(public router: Router,private expenseservice: ExpenseService) {

    this.addexpenseForm = new FormGroup({
       amount: new FormControl('',Validators.required),
       category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
    console.log("in addexpense");
  }
  get f() { return this.addexpenseForm.controls; }

  OnAdd()
  {
    if (this.addexpenseForm.invalid) {
      return;
    }
    this.amountexpense = this.f.amount.value;
    this.expensemodel= new ExpenseModel(this.amountexpense,this.f.category.value,this.f.description.value);


     this.expenseservice
      .addexpense(this.expensemodel)
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
