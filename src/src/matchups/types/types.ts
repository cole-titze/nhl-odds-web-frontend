import { TEAM, IMatchupTeam } from "../../teams/types/types";

export interface IGameOdds {
  id: number;
  gameDate: Date;
  homeTeam: IMatchupTeam;
  awayTeam: IMatchupTeam;
  winner: TEAM;
  hasBeenPlayed: boolean;
}
