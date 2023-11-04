export class Expense {
    constructor(public name: string, public category: string, public value: number, public date: Date) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.value = value;
    }
}