import React, { useState, useEffect, memo } from "react";
import ApiService from "../services/ApiService";
import { ITeamSeasonStats } from "../types/types";
import dayjs, { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";
import Team from "./Team/Team";
import Block from "../../sdk/components/Block";
import { GetSeasonStartYear } from "../utils/get-season-start-year";
import TeamHeader from "./Team/TeamHeader";
import MatchupTable from "../../matchups/components/Matchups/MatchupTable";
import { getTeamSkeleton } from "../utils/get-skeleton-data";

function TeamView() {
  const { teamId: teamIdStr } = useParams();
  const teamId: number = teamIdStr !== undefined ? parseInt(teamIdStr, 10) : 0;
  const defaultTeam: ITeamSeasonStats = {
    id: 0,
    locationName: "",
    teamName: "",
    logoUri: "",
    vegasLogLoss: 0,
    modelLogLoss: 0,
    totalGameCount: 0,
    totalModelAccurateGameCount: 0,
    totalVegasAccurateGameCount: 0,
    seasonWins: 0,
    seasonLosses: 0,
    gameOddsVM: [],
  };
  const currentSeasonStartYear = GetSeasonStartYear(dayjs());

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [year, setYear] = useState<number>(currentSeasonStartYear);
  const [team, setTeam] = useState<ITeamSeasonStats>(defaultTeam);

  const header = team.locationName + " " + team.teamName;

  const getTeam = (teamId: number, year: number) => {
    setIsLoading(true);
    setTeam(getTeamSkeleton());
    ApiService.getTeam(teamId, year)
      .then((response) => {
        const teamVM: ITeamSeasonStats = response.data.value;
        setTeam(teamVM);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  // Get team
  useEffect(() => {
    getTeam(teamId, year);
  }, [teamId, year]);

  const onChangeCallback = (newYear: Dayjs | null) => {
    if (newYear === null || newYear.year() === year) return;
    if (newYear.year() > 2000) setYear(newYear.year());
  };

  return (
    <>
      <TeamHeader
        header={header}
        year={year}
        isLoading={isLoading}
        onDateChange={onChangeCallback}
      />
      <Block>
        <Team team={team} year={year} isLoading={isLoading} />
        <MatchupTable matchups={team.gameOddsVM} isLoading={isLoading} />
      </Block>
    </>
  );
}
export default memo(TeamView);
