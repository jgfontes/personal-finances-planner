import { Component, ElementRef, ViewChild } from '@angular/core';
import { Expense } from '../model/expense';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ExpenseService } from '../expense-service.service';

@Component({
  selector: 'app-create-expense-form',
  templateUrl: './create-expense-form.component.html',
  styleUrls: ['./create-expense-form.component.css']
})
export class CreateExpenseFormComponent {
  @ViewChild('form') form!: NgForm;
  @ViewChild('categorySelect') categorySelect!: ElementRef;

  categories: string[] = [  
    'Salary',
    'Health',
    'Food',
    'Hobby',
    'Bill',
    'Fuel',
    'Others'
  ];

  colorsCategoryMap = new Map<string, string>([
    [this.categories[0], "light-blue"],
    [this.categories[1], "light-green accent-3"],
    [this.categories[2], "yellow accent-2"],
    [this.categories[3], "cyan accent-2"],
    [this.categories[4], "red accent-2"],
    [this.categories[5], "red"],
    [this.categories[6], "purple accent-1"]
  ]);

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

  constructor(private route: ActivatedRoute, private router: Router, private expenseService: ExpenseService) {}

  ngOnInit(): void{
    this.expense = new Expense('', '', 0, new Date);
    this.route.queryParams.subscribe((params) => {
      if(params['edit'] === "true") {
        console.log('Entering edit mode');
        this.editMode = true;
        this.editExpenseName = params['name'];
      }
    })
    console.log(this.editExpenseName);

  }

  // Save Button
  onSubmit() {
    alert(`Saving Expense Name = ${this.expense.name}
      Saving Expense Value = ${this.expense.value}
      Expense Category = ${this.expense.category}
      Expense Date = ${this.expense.date}
      `);
      this.warningMessage = `Expense ${this.expense.name} Saved !`;
      this.warningSubMessage = "Test!"
      this.saveSucceeded = true;
      this.deleteSucceeded = false;
      this.warningIcon = "check_circle"
      this.expenseService.save(this.expense);
  }

  onButtonDeleteClick() {
    alert(`Deleting Expense Name = ${this.expense.name}
      Deleting Expense Value = ${this.expense.value}`);
      this.warningMessage = ` Expense ${this.expense.name} Deleted !`;
      this.warningSubMessage = "Test!"
      this.deleteSucceeded = true;
      this.saveSucceeded = false;
      this.warningIcon = "report";
  }


  ngAfterViewInit() {
    // Initialize Materialize Select
    M.FormSelect.init(this.categorySelect.nativeElement);
  }
}
