import { IDateRange } from "../types/DateRange";
import BasicDatePicker from "./BasicDatePicker";
import { memo, useCallback, useEffect, useState } from "react";
import { Divider, Stack } from "@mui/material";

interface IProps{
    defaultDateRange: IDateRange,
    onChange: (defaultDateRange: IDateRange) => void
}
function DateRangePicker(props: IProps): JSX.Element {
    const { onChange, defaultDateRange } = props;
    const [dateRange, setDateRange] = useState<IDateRange>(defaultDateRange);
    console.log(dateRange);
    useEffect( () => {
        onChange(dateRange);
    }, [onChange, dateRange]);

    const setStartDate = useCallback( (newStartDate: Date) => {
        if(newStartDate.valueOf() === dateRange.startDate.valueOf())
            return;
        const newDateRange = {startDate: newStartDate, endDate: dateRange.endDate}
        setDateRange(newDateRange);
    }, [dateRange.startDate, dateRange.endDate]);
    const setEndDate = useCallback( (newEndDate: Date) => {
        if(newEndDate.valueOf() === dateRange.endDate.valueOf())
            return;
        const newDateRange = {startDate: dateRange.startDate, endDate: newEndDate}
        setDateRange(newDateRange);
    }, [dateRange.startDate, dateRange.endDate]);

    return (
        <span>
            <Stack justifyContent="center" direction="row" spacing={{ xs:1, s: 2 }}>
                <BasicDatePicker label="Start Date" defaultDate={dateRange.startDate} onChange={setStartDate}/>
                <span>to</span>
                <BasicDatePicker label="End Date" defaultDate={dateRange.endDate} onChange={setEndDate}/>
            </Stack>
            <br></br>
            <Divider variant="middle"></Divider>
        </span>
    )};
export default memo(DateRangePicker);