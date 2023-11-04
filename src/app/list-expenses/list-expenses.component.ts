import { Component } from '@angular/core';
import { Expense } from '../model/expense';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent {
  expense: Expense = new Expense("Expense Name", "Fuel", 250);
}
