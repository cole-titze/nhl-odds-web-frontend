import http from "../../../http-common";
import { IResponse } from "../../sdk/types/types";
import { ILogLossesVM } from "../types/types";

const getLogLossesForSeason = (seasonStartYear: number, teamId: number | null) => {
  return http.get<number, IResponse<ILogLossesVM>>(
    "/LogLoss/GetLogLossPoints", {
      params: { seasonStartYear: seasonStartYear, teamId: teamId},
    });
};

const ApiService = {
  getLogLossesForSeason,
};
export default ApiService;
