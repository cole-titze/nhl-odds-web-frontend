import http from "../../../http-common";
import { IDateRange } from "../../sdk/types/DateRange";
import { IResponse } from "../../sdk/types/types";
import { IGameOdds } from "../types/types";

const getPredictedGamesInDateRange = (localDateRange: IDateRange) => {
  return http.get<IDateRange, IResponse<Array<IGameOdds>>>(
    "/GameOdds/GetGameOddsInDateRange",
    { params: localDateRange }
  );
};

const ApiService = {
  getPredictedGamesInDateRange,
};
export default ApiService;
