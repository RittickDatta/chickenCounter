import { MonthEnum } from './monthEnum';

export const API_ENDPOINT = '';

export const INITIAL_VALUE = {
  chickenPrice: 0,
  countData: {
    todaysCount: 0,
    thisWeeksCount: 0,
    thisMonthsCount: 0,
    thisYearsCount: 0,
  },
  yearData: {
    name: '2021',
    months: [
      {
        name: MonthEnum.jan,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.feb,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.mar,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.apr,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.may,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.jun,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.jul,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.aug,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.sept,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.oct,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.nov,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
      {
        name: MonthEnum.dec,
        monthNumber: 0,
        monthTotal: 0,
        days: [],
      },
    ],
  },
};
