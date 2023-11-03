import { Component } from '@angular/core';
import { Expense } from '../model/expense';

@Component({
  selector: 'app-create-expense-form',
  templateUrl: './create-expense-form.component.html',
  styleUrls: ['./create-expense-form.component.css']
})
export class CreateExpenseFormComponent {
  userRandomName: string = "User";
  expense!: Expense;

  // Defining warning Params
  warningMessage?:string;
  warningSubMessage?:string;
  saveSucceeded:boolean = true;
  deleteSucceeded:boolean = false;
  warningIcon?:string;

  constructor() {}

  ngOnInit(): void{
    this.expense = new Expense('', '', 0);
  }

  onButtonSaveClick() {
    alert(`Saving Expense Name = ${this.expense.name}
      Saving Expense Value = ${this.expense.value}`);
      this.warningMessage = `Expense ${this.expense.name} Saved !`;
      this.warningSubMessage = "Test!"
      this.saveSucceeded = true;
      this.deleteSucceeded = false;
      this.warningIcon = "check_circle"
  }

  onButtonDeleteClick() {
    alert(`Deleting Expense Name = ${this.expense.name}
      Deleting Expense Value = ${this.expense.value}`);
      this.warningMessage = ` Expense ${this.expense.name} Deleted !`;
      this.warningSubMessage = "Test!"
      this.deleteSucceeded = true;
      this.saveSucceeded = false;
      this.warningIcon = "report"
  }
}
