
export class ExpenseModel {
    amount: number;
    category: string;
    description: string;

    constructor(amount: number, category: string,description: string) {
        this.amount = amount;
        this.category = category;
        this.description = description;
    }
}