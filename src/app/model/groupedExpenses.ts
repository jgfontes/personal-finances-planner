import { Expense } from "./expense";

export interface GroupedExpenses {
    [date: string]: Expense[];
  }
  