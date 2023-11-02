import React, { useState, useEffect, memo } from "react";
import ApiService from "../services/ApiService";
import { ISeasonStatTotals, ITeamsVM, ITeamSeasonStats } from "../types/types";
import dayjs, { Dayjs } from "dayjs";
import { GetSeasonStartYear } from "../sdk/utils/get-season-start-year";
import TeamHeader from "../../sdk/components/DateHeader";
import TeamTable from "./TeamTable/TeamTable";
import { getTeamListSkeleton } from "../utils/get-skeleton-data";

function TeamListView() {
  const defaultSeasonStats: ISeasonStatTotals = {
    vegasLogLoss: 0,
    modelLogLoss: 0,
    totalGameCount: 0,
    totalModelAccurateGameCount: 0,
    totalVegasAccurateGameCount: 0,
    seasonLosses: 0,
    seasonWins: 0,
    gameOddsVM: [],
  };
  const currentSeasonStartYear = GetSeasonStartYear(dayjs());

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [year, setYear] = useState<number>(currentSeasonStartYear);
  const [teamList, setTeams] = useState<Array<ITeamSeasonStats>>([]);
  const [seasonStats, setStats] =
    useState<ISeasonStatTotals>(defaultSeasonStats);

  const getTeams = (year: number) => {
    setIsLoading(true);
    setTeams(getTeamListSkeleton());
    ApiService.getAllTeams(year)
      .then((response) => {
        const teamsVM: ITeamsVM = response.data.value;
        setTeams(teamsVM.teams);
        setStats(teamsVM.seasonTotals);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  // Get teams
  useEffect(() => {
    getTeams(year);
  }, [year]);

  const onChangeCallback = (newYear: Dayjs | null) => {
    if (newYear === null || newYear.year() === year) return;
    if (newYear.year() > 2000) setYear(newYear.year());
  };

  return (
    <div>
      <TeamHeader
        header="Teams"
        year={year}
        isLoading={isLoading}
        onDateChange={onChangeCallback}
      />
      <TeamTable
        teams={teamList}
        seasonStatTotals={seasonStats}
        isLoading={isLoading}
      />
    </div>
  );
}

export default memo(TeamListView);
