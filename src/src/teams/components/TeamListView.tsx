import React, { useState, useEffect, memo } from "react";
import ApiService from "../services/ApiService";
import TeamList from "./TeamTable/TeamList";
import { ISeasonStatTotals, ITeamsVM, ITeamSeasonStats } from "../types/types";
import dayjs, { Dayjs } from "dayjs";
import { GetSeasonStartYear } from "../utils/get-season-start-year";
import TeamHeader from "./Team/TeamHeader";

function TeamListView() {
  const defaultSeasonStats: ISeasonStatTotals = { vegasLogLoss: 0, modelLogLoss: 0, totalGameCount: 0, totalModelAccurateGameCount: 0, totalVegasAccurateGameCount: 0 }
  const currentSeasonStartYear = GetSeasonStartYear(dayjs());
  
  const [year, setYear] = useState<number>(currentSeasonStartYear);
  const [teamList, setTeams] = useState<Array<ITeamSeasonStats>>([]);
  const [seasonStats, setStats] = useState<ISeasonStatTotals>(defaultSeasonStats);

  const getTeams = (year: number) => {
      ApiService.getAllTeams(year)
      .then((response: any) => {
        const teamsVM: ITeamsVM = response.data.value;
        setTeams(teamsVM.teams);
        setStats(teamsVM.seasonTotals);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  // Get teams
  useEffect(() => {
    getTeams(year);
  }, [year]);

  const onChangeCallback = (newYear: (Dayjs | null)) => {
    if(newYear === null || newYear.year() === year)
      return;
    if(newYear.year() > 2000)
      setYear(newYear.year());
  };

  return ( 
    <div>
      <TeamHeader header="Teams" year={year} onDateChange={onChangeCallback} />
      <TeamList teams={teamList} seasonStatTotals={seasonStats}/>
    </div>
  );
};

export default memo(TeamListView);