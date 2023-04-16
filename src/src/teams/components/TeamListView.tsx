import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import TeamList from "./TeamList";
import { ITeam } from "../types/types";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from "dayjs";

const TeamListView: React.FC = () => {
  const [year, setYear] = React.useState<Dayjs>();
  const [teamList, setTeams] = useState<Array<ITeam>>([]);

  const getTeams = (year: number) => {
      ApiService.getAllTeams(year)
      .then((response: any) => {
        setTeams(response.data.value);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  // Get teams
  useEffect(() => {
    getTeams(year?.year()??2022);
  }, [year]);

  return ( 
  <div>
    <h1>Teams</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="input-spacing"
          views={['year']}
          label={"Season Start Year"}
          value={year}
          onChange={(newYear: (Dayjs | null)) => {if(newYear && newYear.year() > 2000)setYear(newYear)}}
        />
      </LocalizationProvider>
    <TeamList teams={teamList}/>
  </div>
);};
export default TeamListView;