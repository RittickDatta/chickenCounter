import { Day } from "./Day";

export interface Month {
    name: string;
    monthNumber: number;
    monthTotal: number;
    days: Day[];
}