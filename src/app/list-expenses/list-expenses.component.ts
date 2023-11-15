import { Component } from '@angular/core';
import { Expense } from '../model/expense';
import { WebStorageUtil } from '../web-storage-util';
import { ExpenseService } from '../expense-service.service';
import { GroupedExpenses } from '../model/groupedExpenses';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent {
  //Delete this single expense
  expense: Expense = new Expense("Expense Name", "Fuel", 250, new Date(1998, 10, 20));
  // Try
  expenseMap: GroupedExpenses = {};
  dateArray!: string[];

  //Delete the webStorage???
  webStorageUtil: WebStorageUtil = new WebStorageUtil;

  monthName: string[] = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
  dateString = "";

  constructor(private expenseService: ExpenseService) {
  }

  async ngOnInit(): Promise<void>{
    this.dateString = this.convertDateToString(this.expense.date);
    let notSortedExpenses = await this.expenseService.getAll();
    this.expenseMap = this.sortExpenses(notSortedExpenses);
    console.log(notSortedExpenses);
    this.dateArray = Object.keys(this.expenseMap);
  }

  convertDateToString(date: Date) {
    return date.getDay() + ' ' +
      this.monthName[date.getMonth()] + ' ' +
      date.getFullYear();
  }

  // Sort the array by date
  sortExpenses(expenses: Expense[]): GroupedExpenses {
    const sortedExpenses = expenses.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
  
      // Compare the dates
      if (dateA < dateB) {
        return -1;
      } else if (dateA > dateB) {
        return 1;
      } else {
        return 0;
      }
    });
  
    // Group expenses by date
    const groupedExpenses = sortedExpenses.reduce((groups, expense) => {
      const dateStr = this.convertDateToString(new Date(expense.date));
      groups[dateStr] = groups[dateStr] || [];
      groups[dateStr].push(expense);
      return groups;
    }, {} as GroupedExpenses);
  
    return groupedExpenses;
  }
  
}
