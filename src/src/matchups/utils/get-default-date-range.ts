import { IDateRange } from "../../sdk/types/DateRange";
const DAYS_AHEAD = 7;
export function getDefaultDateRange(): IDateRange {
    const defaultStartDate = new Date();
    defaultStartDate.setHours(0, 0, 0, 0);
    let defaultEndDate = new Date();
    defaultEndDate.setHours(23, 59, 59, 0);
    defaultEndDate = new Date(defaultEndDate.setDate(defaultEndDate.getDate() + DAYS_AHEAD));
  return { startDate: defaultStartDate, endDate: defaultEndDate };
}