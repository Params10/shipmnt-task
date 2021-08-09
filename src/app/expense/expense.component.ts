import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../services/expense.service';
import { ExpenseModel } from '../model/ExpenseModel';
import { ExpenseDataModel } from '../model/ExpensedataModel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  displayedColumns: string[] = ['amount','description','category','date_added'];
  showtable!:boolean;
  addexpenseForm: FormGroup;
  getexpenseForm:FormGroup;
  expensemodel!: ExpenseModel;
  expensedatamodel!:Array<ExpenseDataModel>;
  amountexpense!: number;
  dataSource!:Array<ExpenseDataModel>;
  constructor(public router: Router, private expenseservice: ExpenseService) {

    this.getexpenseForm = new FormGroup({
      categoryname : new FormControl('', [Validators.required])
    });
    this.addexpenseForm = new FormGroup({
      amount: new FormControl('', Validators.required),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
     
    });
  }

  ngOnInit(): void {
    this.showtable=false;
    console.log("in addexpense");

  }
  get f() { return this.addexpenseForm.controls; }
  get g() { return this.getexpenseForm.controls; }

  OnAdd() {
    if (this.addexpenseForm.invalid) {
      return;
    }
    this.amountexpense = this.f.amount.value;
    this.expensemodel = new ExpenseModel(this.amountexpense, this.f.category.value, this.f.description.value);


    this.expenseservice
      .addexpense(this.expensemodel)
      .pipe()
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          this.addexpenseForm.reset();
        },
        error => {
          console.log("error");
        }
      );
      this.ngOnInit();

  }
  getexpense()
  {
    this.showtable = true;
    this.expenseservice
    .getexpense(this.g.categoryname.value)
    .pipe()
    .subscribe(
      data => {
       this.expensedatamodel = data;
       console.log(this.expensedatamodel);
       this.dataSource = this.expensedatamodel;
       console.log(this.dataSource);
       this.getexpenseForm.reset();
      },
      error => {
        console.log("error");
      }
    );
  }


}
