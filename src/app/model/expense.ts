export class Expense {
    date: Date;
    constructor(public name: string, public category: string, public value: number) {
        this.name = name;
        this.category = category;
        this.date = new Date;
        this.value = value;
    }
}