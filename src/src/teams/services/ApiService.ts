import http from "../../../http-common";
import { IResponse } from "../../sdk/types/types";
import { ITeamSeasonStats, ITeamsVM } from "../types/types";

const getAllTeams = (seasonStartYear: number) => {
  return http.get<number, IResponse<ITeamsVM>>("/Team/GetAllTeams", {
    params: { seasonStartYear: seasonStartYear },
  });
};

const getTeam = (teamId: number, seasonStartYear: number) => {
  return http.get<number, IResponse<ITeamSeasonStats>>("/Team/GetTeam", {
    params: { teamId: teamId, seasonStartYear: seasonStartYear },
  });
};

const ApiService = {
  getAllTeams,
  getTeam,
};
export default ApiService;
