import { Year } from "./Year";

export interface Count {
    todaysCount: number;
    thisWeeksCount: number;
    thisMonthsCount: number;
    thisYearsCount: number;
}

export interface ChickenCounter {
    chickenPrice: number;
    countData: Count;
    yearData: Year;
}
