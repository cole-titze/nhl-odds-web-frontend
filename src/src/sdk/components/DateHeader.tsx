import React, { memo } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import Block from "../components/Block";
import { Divider, Skeleton } from "@mui/material";

interface IProps {
  header: string;
  year: number;
  isLoading: boolean;
  onDateChange: (newYear: Dayjs | null) => void;
}

function DateHeader(props: IProps) {
  const { header, year, isLoading, onDateChange } = props;
  return (
    <>
      <Block>
        {isLoading ? (
          <Skeleton
            className="PageTitle"
            animation="wave"
            variant="rounded"
            width={300}
            height={50}
            style={{ marginBottom: 8 }}
          />
        ) : (
          <h1 className="PageTitle">{header}</h1>
        )}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year"]}
            label={"Season Start Year"}
            value={dayjs().year(year)}
            onChange={onDateChange}
          />
        </LocalizationProvider>
      </Block>
      <Divider className="HorizontalDivider" variant="middle"></Divider>
    </>
  );
}
export default memo(DateHeader);
