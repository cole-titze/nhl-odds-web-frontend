import React, { memo } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import Block from "../../../sdk/components/Block";
import { Divider } from "@mui/material";

interface IProps {
  header: string;
  year: number;
  onDateChange: (newYear: Dayjs | null) => void;
}

function TeamHeader(props: IProps) {
  const { header, year, onDateChange } = props;
  return (
    <>
      <Block>
        <h1 className="PageTitle">{header}</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="input-spacing"
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
export default memo(TeamHeader);
