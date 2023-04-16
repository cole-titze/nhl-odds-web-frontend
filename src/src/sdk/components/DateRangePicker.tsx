import { IDateRange } from "../types/DateRange";
import BasicDatePicker from "./BasicDatePicker";
import { useEffect, useState } from "react";
import { Divider, Stack } from "@mui/material";

interface IProps{
    defaultDateRange: IDateRange,
    onChange: (defaultDateRange: IDateRange) => void
}
function DateRangePicker(props: IProps): JSX.Element {
    const { onChange, defaultDateRange } = props;
    const [dateRange, setDateRange] = useState<IDateRange>(defaultDateRange);
    const setStartDate = (newStartDate: Date) => {
        const newDateRange = {startDate: newStartDate, endDate: dateRange.endDate}
        setDateRange(newDateRange);
    }
    const setEndDate = (newEndDate: Date) => {
        const newDateRange = {startDate: dateRange.startDate, endDate: newEndDate}
        setDateRange(newDateRange);
    }
    useEffect( () => {
        onChange(dateRange);
      }, [dateRange]);
    return (
        <span>
            <Stack justifyContent="center" direction="row" spacing={{ xs:1, s: 2 }}>
                <BasicDatePicker label="Start Date" defaultDate={dateRange.startDate} onChange={(newStartDate) => setStartDate(newStartDate)}/>
                <span>to</span>
                <BasicDatePicker label="End Date" defaultDate={dateRange.endDate} onChange={(newEndDate) => setEndDate(newEndDate)}/>
            </Stack>
            <br></br>
            <Divider variant="middle"></Divider>
        </span>
    )};
export default DateRangePicker;