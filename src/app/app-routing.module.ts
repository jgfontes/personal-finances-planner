import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import { CreateExpenseFormComponent } from './create-expense-form/create-expense-form.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: 'new-expense', component: CreateExpenseFormComponent },
  { path: 'list-expenses', component: ListExpensesComponent },
  { path: 'about-me', component: AboutMeComponent },
  {
    path: '',
    redirectTo:'/list-expenses',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
