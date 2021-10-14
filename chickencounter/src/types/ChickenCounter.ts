import { Year } from "./Year";

interface Count {
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
