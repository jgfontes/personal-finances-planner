export class Expense {
    constructor(public name: string, public category: string, public value: number) {
        this.name = name;
        this.category = category;
        this.value = value;
    }
}