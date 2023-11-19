import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from './model/expense';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseApiService {
  URL = 'http://localhost:3000/expenses/'; 

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private httpClient: HttpClient) { }

  save(expense: Expense): Observable<Expense> {
    return this.httpClient
      .post<Expense>(this.URL, expense, this.httpOptions);
  }

  getAll(): Observable<Expense[]> {
    return this.httpClient
      .get<Expense[]>(this.URL, this.httpOptions);
  }

  deleteById(id: string): Observable<Expense> {
    console.log("Promise API Service - RECEIVED ID: " + id);
    return this.httpClient
      .delete<Expense>(this.URL + id, this.httpOptions);
  }

  update(expense: Expense): Observable<Expense> {
    return this.httpClient
      .patch<Expense>(
        this.URL + expense.id, 
        expense, 
        this.httpOptions);
  }
}
