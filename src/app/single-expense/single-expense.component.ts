import { Component, Input } from '@angular/core';
import { Expense } from '../model/expense';

@Component({
  selector: 'app-single-expense',
  templateUrl: './single-expense.component.html',
  styleUrls: ['./single-expense.component.css']
})
export class SingleExpenseComponent {
handleMouseClick() {
  console.log("ELEMENTO CLICADO");
}
 // Defining colors dictionary for the badge
 colorDictionary: { [cat: string]: string; } = 
 {
   "Salary":  "light-blue",
   "Health" : "light-green accent-3",
   "Food" : "yellow accent-2",
   "Hobby" : "cyan accent-2",
   "Bill" : "red accent-2",
   "Fuel" : "red",
   "Others" : "purple accent-1"
 };
 monthName: string[] = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
 @Input() expense: Expense = new Expense('', '', 0, new Date(1998, 10, 20));
 queryParams = { edit: true, expense: JSON.stringify(this.expense) };

  dateString = 
    this.expense.date.getDay() + ' ' +
    this.monthName[this.expense.date.getMonth()] + ' ' +
    this.expense.date.getFullYear() ;

    ngOnInit()
  {
    this.queryParams = { edit: true, expense: JSON.stringify(this.expense) };
  }}
