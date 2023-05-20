import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import TeamList from "./TeamTable/TeamList";
import { ISeasonStatTotals, ITeamsVM, ITeamSeasonStats } from "../types/types";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
import { GetSeasonStartYear } from "../utils/get-season-start-year";
import Block from "../../sdk/components/Block";
import { Divider } from "@mui/material";

const TeamListView: React.FC = () => {
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
    <Block>
      <h1 className="PageTitle">Teams</h1>
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
    <TeamList teams={teamList} seasonStatTotals={seasonStats}/>
  </div>
);};
export default TeamListView;