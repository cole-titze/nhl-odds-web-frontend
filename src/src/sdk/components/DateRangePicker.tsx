import React, { memo, useCallback, useEffect, useState } from "react";
import { IDateRange } from "../types/DateRange";
import BasicDatePicker from "./BasicDatePicker";
import { Stack } from "@mui/material";
import { isDateEqual } from "../utils/compare-dates";

interface IProps {
  defaultDateRange: IDateRange;
  onChange: (defaultDateRange: IDateRange) => void;
}
function DateRangePicker(props: IProps) {
  const { onChange, defaultDateRange } = props;
  const [dateRange, setDateRange] = useState<IDateRange>(defaultDateRange);

  useEffect(() => {
    onChange(dateRange);
  }, [onChange, dateRange]);

  const setStartDate = useCallback(
    (newStartDate: Date) => {
      if (isDateEqual(newStartDate, dateRange.startDate)) return;
      const newDateRange = {
        startDate: newStartDate,
        endDate: dateRange.endDate,
      };
      setDateRange(newDateRange);
    },
    [dateRange.startDate, dateRange.endDate]
  );
  const setEndDate = useCallback(
    (newEndDate: Date) => {
      if (isDateEqual(newEndDate, dateRange.endDate)) return;
      const newDateRange = {
        startDate: dateRange.startDate,
        endDate: newEndDate,
      };
      setDateRange(newDateRange);
    },
    [dateRange.startDate, dateRange.endDate]
  );

  return (
    <span>
      <Stack justifyContent="center" direction="row" spacing={{ xs: 1, s: 2 }}>
        <BasicDatePicker
          label="Start Date"
          defaultDate={dateRange.startDate}
          onChange={setStartDate}
        />
        <span>to</span>
        <BasicDatePicker
          label="End Date"
          defaultDate={dateRange.endDate}
          onChange={setEndDate}
        />
      </Stack>
    </span>
  );
}
export default memo(DateRangePicker);
