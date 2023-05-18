import http from "../../../http-common";
import {ITeamSeasonStats, ITeamsVM} from "../types/types"

const getAllTeams = (seasonStartYear: number) => {
  return http.get<ITeamsVM>("/Team/GetAllTeams", {params: {seasonStartYear: seasonStartYear}})
}

const getTeam = (teamId: number, seasonStartYear: number) => {
  return http.get<ITeamSeasonStats>("/Team/GetTeam", {params: {teamId: teamId, seasonStartYear: seasonStartYear}})
}

const ApiService = {
  getAllTeams,
  getTeam
};
export default ApiService;
