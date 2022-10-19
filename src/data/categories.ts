import { Category } from "../types/category";

export const categories: Category = {
    food: {
        title: 'Food', color: 'pink', expense: true,
    },
    rent: {
        title: 'Rent', color: 'blue', expense: true,
    },
    bill: {
        title: 'Bill', color: 'red', expense: true,
    },
    salary: {
        title: 'Salary', color: 'green', expense: false,
    },
}