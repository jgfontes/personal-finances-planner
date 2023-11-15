import { Injectable } from '@angular/core';
import { Expense } from './model/expense';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { WebStorageUtil } from './web-storage-util';
import { PromiseApiService } from './promise-api.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  webstorageUtils: WebStorageUtil = new WebStorageUtil;
  expensesDB!: Expense[];
  private expenseSource!: BehaviorSubject<number>;

  constructor(private promiseApiService: PromiseApiService) {
    this.webstorageUtils.populateExpenses;
    this.expensesDB = this.webstorageUtils.get();
  }

  async getAll(): Promise<Expense[]> {
    try {
      const expenses = await this.promiseApiService.getAll();
      console.log("Promise API Service GET ALL: Success");
      this.expensesDB = expenses;
      return expenses;
    } catch (error) {
      console.log("Promise API Service GET ALL: FAILED");
      console.error(error); // Log the error for debugging
      return this.expensesDB;
    }
  }

  async save(expense: Expense) {
    try {
      await this.promiseApiService.save(expense);
      console.log("Promise API Service: Expense saved successfully")
    } catch(error) { 
      console.log("Promise API Service FAILED")
      let storedExpenses = this.webstorageUtils.get();
      this.webstorageUtils.get().push(expense);
      this.webstorageUtils.set(storedExpenses);
      this.expensesDB = storedExpenses;
    }
  }

  update(expense: Expense) {
    // TO DO -> Implement Promise API Services Here
    for (let i = 0; i < this.expensesDB.length; i++) {
      if(expense.id == this.expensesDB[i].id) {
        this.expensesDB[i].name = expense.name;
        this.expensesDB[i].category = expense.category;
        this.expensesDB[i].value = expense.value;
        this.expensesDB[i].date = expense.date;
      }
    }
    this.webstorageUtils.set(this.expensesDB);
  }

  delete(expense: Expense) {
    // TO DO -> Implement Promise API Services Here
    for (let i = 0; i < this.expensesDB.length; i++) {
      if(expense.id == this.expensesDB[i].id) {
        this.expensesDB.splice(1, i);
      }
    }
    this.webstorageUtils.set(this.expensesDB);
  }
}
