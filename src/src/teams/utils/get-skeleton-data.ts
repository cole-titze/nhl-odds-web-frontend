import { IGameOdds } from "../../matchups/types/types";
import { emptyMatchup } from "../../matchups/utils/get-skeleton-data";
import { ITeamSeasonStats } from "../../teams/types/types";

export function getTeamListSkeleton(): ITeamSeasonStats[] {
  const emptyTeam: ITeamSeasonStats = {
    id: 0,
    locationName: "",
    teamName: "",
    logoUri: "",
    vegasLogLoss: 0,
    modelLogLoss: 0,
    totalGameCount: 0,
    totalModelAccurateGameCount: 0,
    totalVegasAccurateGameCount: 0,
    seasonWins: 0,
    seasonLosses: 0,
    gameOddsVM: [],
  };
  const teams = [];
  for (let i = 0; i < 32; i++) {
    teams.push({ ...emptyTeam, id: i });
  }
  return teams;
}

export function getTeamSkeleton(): ITeamSeasonStats {
  const gameOdds: IGameOdds[] = [];
  for (let i = 0; i < 32; i++) {
    gameOdds.push({ ...emptyMatchup, id: i });
  }
  const emptyTeam: ITeamSeasonStats = {
    id: 0,
    locationName: "",
    teamName: "",
    logoUri: "",
    vegasLogLoss: 0,
    modelLogLoss: 0,
    totalGameCount: 0,
    totalModelAccurateGameCount: 0,
    totalVegasAccurateGameCount: 0,
    seasonWins: 0,
    seasonLosses: 0,
    gameOddsVM: gameOdds,
  };

  return emptyTeam;
}
