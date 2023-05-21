import { IDateRange } from "../types/DateRange";

export function isDateEqual(a: Date, b: Date): boolean {
  if (a.valueOf() === b.valueOf()) return true;
  return false;
}

export function isDateRangeEqual(a: IDateRange, b: IDateRange): boolean {
  if (
    a.startDate.valueOf() === b.startDate.valueOf() &&
    a.endDate.valueOf() === b.endDate.valueOf()
  )
    return true;
  return false;
}
