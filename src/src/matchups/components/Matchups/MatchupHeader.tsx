import React, { memo } from "react";
import { IDateRange } from "../../../sdk/types/DateRange";
import DateRangePicker from "../../../sdk/components/DateRangePicker";
import Block from "../../../sdk/components/Block";
import { Divider } from "@mui/material";

interface IProps {
  header: string;
  defaultDateRange: IDateRange;
  onDateChange: (newDateRange: IDateRange) => void;
}
function MatchupHeader(props: IProps) {
  const { defaultDateRange, header, onDateChange } = props;

  return (
    <>
      <Block>
        <h1 className="PageTitle">{header}</h1>
        <DateRangePicker
          defaultDateRange={defaultDateRange}
          onChange={onDateChange}
        />
      </Block>
      <Divider className="HorizontalDivider" variant="middle"></Divider>
    </>
  );
}

export default memo(MatchupHeader);
