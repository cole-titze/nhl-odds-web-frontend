import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import ApiService from "../services/ApiService";
import { IDateRange } from "../../sdk/types/DateRange";
import { IGameOdds } from "../types/types";
import { getDefaultDateRange } from "../utils/get-default-date-range";
import Matchups from "./Matchups/Matchups";
import { isDateRangeEqual } from "../../sdk/utils/compare-dates";
import MatchupHeader from "./Matchups/MatchupHeader";
import { getMatchupSkeleton } from "../utils/get-skeleton-data";

function MatchupView() {
  const defaultDateRange = useMemo(() => getDefaultDateRange(), []);
  const [matchupList, setMatchups] = useState<Array<IGameOdds>>([]);
  const [dateRange, setDateRange] = useState<IDateRange>(defaultDateRange);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateGameOdds = useCallback(
    (newDateRange: IDateRange): void => {
      if (isDateRangeEqual(dateRange, newDateRange)) return;

      setDateRange(newDateRange);
    },
    [dateRange]
  );

  const getGameOdds = (dateRange: IDateRange) => {
    setIsLoading(true);
    setMatchups(getMatchupSkeleton());
    ApiService.getPredictedGamesInDateRange(dateRange)
      .then((response) => {
        setMatchups(response.data.value);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getGameOdds(dateRange);
  }, [dateRange]);

  return (
    <div>
      <MatchupHeader
        header="Matchups"
        defaultDateRange={defaultDateRange}
        onDateChange={updateGameOdds}
      />
      <Matchups matchups={matchupList} isLoading={isLoading} />
    </div>
  );
}

export default memo(MatchupView);
