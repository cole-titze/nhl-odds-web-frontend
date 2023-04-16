import { IDateRange } from "../../sdk/types/DateRange";
const DAYS_AHEAD = 7;
export function getDefaultDateRange(): IDateRange {
  const defaultStartDate = new Date();
  let defaultEndDate = new Date();
  defaultEndDate = new Date(defaultEndDate.setDate(defaultEndDate.getDate() + DAYS_AHEAD));
  return { startDate: defaultStartDate, endDate: defaultEndDate};
}