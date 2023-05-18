import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import ApiService from "../services/ApiService";
import {IDateRange} from "../../sdk/types/DateRange";
import {IGameOdds} from "../types/types";
import { getDefaultDateRange } from "../utils/get-default-date-range";
import DateRangePicker from "../../sdk/components/DateRangePicker";
import Matchups from "./Matchups";

function MatchupView() {
  const defaultDateRange = useMemo(() => getDefaultDateRange(), []);
  const [matchupList, setMatchups] = useState<Array<IGameOdds>>([]);
  const [dateRange, setDateRange] = useState<IDateRange>(defaultDateRange);
  console.log("Render number");

  const updateGameOdds = useCallback( (newDateRange: IDateRange): void => {
    setDateRange(newDateRange);
  }, []);

  const getGameOdds = (dateRange: IDateRange) => {
      ApiService.getPredictedGamesInDateRange(dateRange)
      .then((response: any) => {
        setMatchups(response.data.value);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  // Get games with different dateRanges
  useEffect(() => {
    getGameOdds(dateRange);
  }, [dateRange]);

  return (
    <div>
      <h1>Matchups</h1>
      <DateRangePicker defaultDateRange={dateRange} onChange={updateGameOdds}/>
      <Matchups matchups={matchupList}/>
    </div>
  );
}

export default memo(MatchupView)