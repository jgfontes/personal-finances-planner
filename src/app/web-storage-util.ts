import { Expense } from "./model/expense";

export class WebStorageUtil {

    EXPENSES_KEY: string = "EXPENSES_KEY";

    expensesDB: Expense[] = [];

    populateExpenses() {
        this.expensesDB.push(new Expense("Expense AAAA", "Health", 4000, new Date(1998, 10, 20)));
        this.expensesDB.push(new Expense("Expense XXX", "Fuel", 250, new Date(1998, 10, 20)));
        this.expensesDB.push(new Expense("Expense YYY", "Bill", 450, new Date(2006, 10, 20)));

        localStorage.setItem(this.EXPENSES_KEY, JSON.stringify(this.expensesDB));
    }

    get() {
        let storedExpenses = localStorage.getItem(this.EXPENSES_KEY);
        if(storedExpenses) {
            this.expensesDB = JSON.parse(storedExpenses) as Expense[];
        }
        return this.expensesDB;
    } 

    set(expenses: Expense[]) {
        this.expensesDB = expenses;
        localStorage.setItem(this.EXPENSES_KEY, JSON.stringify(expenses));
    }
}