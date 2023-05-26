import { TEAM } from "../../teams/types/types";
import { IGameOdds } from "../types/types";

export const emptyMatchup: IGameOdds = {
  id: 0,
  gameDate: new Date(),
  homeTeam: {
    id: 1,
    locationName: "",
    teamName: "",
    logoUri: "",
    vegasOdds: 0,
    modelOdds: 0,
    goals: 0,
    team: TEAM.home,
  },
  awayTeam: {
    id: 0,
    locationName: "",
    teamName: "",
    logoUri: "",
    vegasOdds: 0,
    modelOdds: 0,
    goals: 0,
    team: TEAM.away,
  },
  winner: TEAM.home,
  hasBeenPlayed: false,
};

export function getMatchupSkeleton(): IGameOdds[] {
  return [
    { ...emptyMatchup },
    { ...emptyMatchup, id: 1 },
    { ...emptyMatchup, id: 2 },
  ];
}
