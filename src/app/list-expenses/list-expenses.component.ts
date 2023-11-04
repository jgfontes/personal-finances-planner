import { Component } from '@angular/core';
import { Expense } from '../model/expense';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent {
  expense: Expense = new Expense("Expense Name", "Fuel", 250, new Date(1998, 10, 20));

  monthName: string[] = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
  dateString = 
    this.expense.date.getDay() + ' ' +
    this.monthName[this.expense.date.getMonth()] + ' ' +
    this.expense.date.getFullYear();

  constructor() {
    console.log("testing");
  }
}
