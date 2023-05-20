import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import ApiService from "../services/ApiService";
import {IDateRange} from "../../sdk/types/DateRange";
import {IGameOdds} from "../types/types";
import { getDefaultDateRange } from "../utils/get-default-date-range";
import DateRangePicker from "../../sdk/components/DateRangePicker";
import Matchups from "./Matchups";
import { isDateRangeEqual } from "../../sdk/utils/compare-dates";
import Block from "../../sdk/components/Block";
import { Divider } from "@mui/material";

function MatchupView() {
  const defaultDateRange = useMemo(() => getDefaultDateRange(), []);
  const [matchupList, setMatchups] = useState<Array<IGameOdds>>([]);
  const [dateRange, setDateRange] = useState<IDateRange>(defaultDateRange);

  const updateGameOdds = useCallback( (newDateRange: IDateRange): void => {
    if(isDateRangeEqual(dateRange, newDateRange))
      return;
    
    setDateRange(newDateRange);
  }, [dateRange]);

  const getGameOdds = (dateRange: IDateRange) => {
      ApiService.getPredictedGamesInDateRange(dateRange)
      .then((response: any) => {
        setMatchups(response.data.value);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getGameOdds(dateRange);
  }, [dateRange]);

  return (
    <div>
      <Block>
        <h1 className="PageTitle">Matchups</h1>
        <DateRangePicker defaultDateRange={dateRange} onChange={updateGameOdds}/>
      </Block>
      <Divider className="HorizontalDivider" variant="middle"></Divider>

      <Matchups matchups={matchupList}/>
    </div>
  );
}

export default memo(MatchupView)