import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {SignupComponent} from '../app/signup/signup.component'
import { LoginComponent } from './login/login.component';
import { ExpenseComponent } from './expense/expense.component';
import { CategoryComponent } from './category/category.component';
import { MiddlepageComponent } from './middlepage/middlepage.component';


const routes: Routes = [

  {path: '', redirectTo: '/login',pathMatch:"full"},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'expense', component: ExpenseComponent},
  {path: 'category', component: CategoryComponent},
  {path:'middlepage',component: MiddlepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
