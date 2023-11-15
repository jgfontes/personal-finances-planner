import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from './model/expense';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseApiService {
  URL = 'http://localhost:3000/expenses/'; 

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private httpClient: HttpClient) { }

  save(expense: Expense): Promise<Expense> {
    return lastValueFrom(this.httpClient
      .post<Expense>(this.URL, expense, this.httpOptions));
  }

  getAll(): Promise<Expense[]> {
    return lastValueFrom(this.httpClient
      .get<Expense[]>(this.URL, this.httpOptions));
  }
}
