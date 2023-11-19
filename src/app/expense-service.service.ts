import { Injectable } from '@angular/core';
import { Expense } from './model/expense';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { WebStorageUtil } from './web-storage-util';
import { PromiseApiService } from './promise-api.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expensesDB!: Expense[];
  private expenseSource!: BehaviorSubject<number>;

  constructor(private promiseApiService: PromiseApiService) {
  }

  getAll(): Observable<Expense[]> {
  
    return this.promiseApiService.getAll();
    
    
  }

  save(expense: Expense) {
    return this.promiseApiService.save(expense);
  }

  delete(expense: Expense) {
    const expenses = this.promiseApiService.deleteById(expense.id as unknown as string);
    return expenses;
  }

  update(expense: Expense) {
    return this.promiseApiService.update(expense);
  }
}
