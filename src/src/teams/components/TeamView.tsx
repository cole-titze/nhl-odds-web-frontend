import React, { useState, useEffect, memo } from "react";
import ApiService from "../services/ApiService";
import { ITeamSeasonStats } from "../types/types";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";
import Team from "./Team";
import Block from "../../sdk/components/Block";
import { GetSeasonStartYear } from "../utils/get-season-start-year";
import { Divider } from "@mui/material";

const TeamView: React.FC = () => {
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
    totalVegasAccurateGameCount: 0
  };
  const currentSeasonStartYear = GetSeasonStartYear(dayjs());
  
  const [year, setYear] = useState<number>(currentSeasonStartYear);
  const [team, setTeam] = useState<ITeamSeasonStats>(defaultTeam);

  const getTeam = (teamId: number, year: number) => {
      ApiService.getTeam(teamId, year)
      .then((response: any) => {
        const teamVM: ITeamSeasonStats = response.data.value;
        setTeam(teamVM);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  // Get team
  useEffect(() => {
    getTeam(teamId, year);
  }, [teamId, year]);

  const onChangeCallback = (newYear: (Dayjs | null)) => {
    if(newYear === null || newYear.year() === year)
      return;
    if(newYear.year() > 2000)
      setYear(newYear.year());
  };

  return (
    <>
      <Block>
        <h1 className="PageTitle">{team.locationName + " " + team.teamName}</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="input-spacing"
              views={['year']}
              label={"Season Start Year"}
              value={dayjs().year(year)}
              onChange={onChangeCallback}
            />
          </LocalizationProvider>
      </Block>
      <Divider className="HorizontalDivider" variant="middle"></Divider>
      <Block>
        <Team team={team} year={year}/>
      </Block>
    </>
  );
};
export default memo(TeamView);