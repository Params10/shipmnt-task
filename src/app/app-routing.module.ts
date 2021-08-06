import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {SignupComponent} from '../app/signup/signup.component'
import { LoginComponent } from './login/login.component';
import { ExpenseComponent } from './expense/expense.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [

  {path: '', redirectTo: '/home',pathMatch:"full"},
  {path: 'home', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'expense', component: ExpenseComponent},
  {path: 'category', component: CategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
