import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Common {
    currentYear!: string;

    yearsOfExperience!: string | number;

    constructor() {
        // resolve current year
        this.currentYear = new Date().getFullYear().toString();

        // calculate years of experience
        this.yearsOfExperience = this.calculateYearsOfExperience('2017-06-20');
    }

    calculateYearsOfExperience(startDate: string | Date) {
        const start = new Date(startDate);
        const now = new Date();

        let years = now.getFullYear() - start.getFullYear();

        // If current month/day is before start month/day, subtract 1
        if (
            now.getMonth() < start.getMonth() ||
            (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
        ) {
            years--;
        }

        return years;
    }
}
