export class Expense {
    static nextId = 1;
    id: number;

    constructor(public name: string, public category: string, public value: number, public date: Date) {
        this.id = Expense.nextId++;
        this.name = name;
        this.category = category;
        this.date = date;
        this.value = value;
    }
}