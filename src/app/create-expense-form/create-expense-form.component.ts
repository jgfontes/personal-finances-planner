import { Component, ElementRef, ViewChild } from '@angular/core';
import { Expense } from '../model/expense';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ExpenseService } from '../expense-service.service';
import { WarningMessage } from '../model/warningMessage';

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

  constructor(private route: ActivatedRoute, private router: Router, private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expense = new Expense('', '', 0, new Date);
    this.route.queryParams.subscribe((params) => {

      // Edit Mode
      if(params['edit'] === "true") {
        console.log('Entering edit mode');
        this.editMode = true;
        this.expense =JSON.parse(params['expense']) as Expense;
      } 
    })
  }

  // Save Button
  onSubmit() {
    this.expenseService.save(this.expense).subscribe({
      next: (data: Expense) => {
      },
      error: (error) => {
        console.log(error);
        alert("Error saving expense: " + error.warningMessage);
      },
      complete: () => {
        let warning = JSON.stringify(new WarningMessage(true, this.expense.name, true));
        this.router.navigate(['/list-expenses'], {
          queryParams: {message: warning}
        });
      }}
    );
  }

  onButtonDeleteClick() {
    this.expenseService.delete(this.expense).subscribe({
      next: (data: Expense) => {},
      error: (error) => {
        console.log("Error deleting expense: " + error);
        alert(error.warningMessage);
      },
      complete: () => {
        let warning = JSON.stringify(new WarningMessage(false, this.expense.name, true));
        this.router.navigate(['/list-expenses'], {
          queryParams: {message: warning}
        });
      }});
  
  }

  onButtonUpdateClick() {
    this.expenseService.update(this.expense).subscribe({
      next: (data: Expense) => {
      },
      error: (error) => {
        console.log("Error updating expense: " + error);
        alert(error.warningMessage);
      },
      complete: () => {
        let warning = JSON.stringify(new WarningMessage(true, this.expense.name, true));
        this.router.navigate(['/list-expenses'], {
          queryParams: {message: warning}
        });
      }
    })
  }

  ngAfterViewInit() {
    // Initialize Materialize Select
    M.FormSelect.init(this.categorySelect.nativeElement);
  }
}
