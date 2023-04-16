import http from "../../../http-common";
import {ITeam} from "../types/types"

const getAllTeams = (year: number) => {
  return http.get<Array<ITeam>>("/Team/GetAllTeams", {params: {seasonStartYear: year}})
}

const ApiService = {
  getAllTeams
};
export default ApiService;
