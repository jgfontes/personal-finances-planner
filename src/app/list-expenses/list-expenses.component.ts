import { Component } from '@angular/core';
import { Expense } from '../model/expense';
import { ExpenseService } from '../expense-service.service';
import { GroupedExpenses } from '../model/groupedExpenses';
import { WarningMessage } from '../model/warningMessage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent {
  //Delete this single expense
  expense: Expense = new Expense("Expense Name", "Fuel", 250, new Date(1998, 10, 20));
  warningMessage: WarningMessage = new WarningMessage(false, '', false);
  // Try
  expenseMap: GroupedExpenses = {};
  dateArray!: string[];

  monthName: string[] = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
  dateString = "";

  constructor(private expenseService: ExpenseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void{
    this.dateString = this.convertDateToString(this.expense.date);

    this.route.queryParams.subscribe((params) => {
      // Check Warning Message to be shown
      if(params['message']) {
        this.warningMessage = JSON.parse(params['message']) as WarningMessage;
        setTimeout(() => {
          // Hide the warning after 3 seconds
          this.warningMessage.showWarning = false;
        }, 3000);
      } else {
        this.warningMessage.showWarning = false;
      }
    })

    this.expenseService.getAll().subscribe(
      (data: Expense[]) => {
        if(!data || data.length == 0) {
          alert("No result was found!");
          return;
        }
        let notSortedExpenses = data;
        this.expenseMap = this.sortExpenses(notSortedExpenses);
        this.dateArray = Object.keys(this.expenseMap);
      }
    )
  }

  convertDateToString(date: Date) {
    return date.getUTCDate() + ' ' +
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
