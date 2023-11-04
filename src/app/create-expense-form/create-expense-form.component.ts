import { Component } from '@angular/core';
import { Expense } from '../model/expense';
import { ActivatedRoute, Router } from '@angular/router';

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
  // Defining edit/create Params
  editMode: boolean = false;
  editExpenseName: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void{
    this.expense = new Expense('', '', 0, new Date(1998, 10, 20));
    this.route.queryParams.subscribe((params) => {
      if(params['edit'] === "true") {
        console.log('Entering edit mode');
        this.editMode = true;
        this.editExpenseName = params['name'];
      }
    })
    console.log(this.editExpenseName);

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
