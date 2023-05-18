import { IGameOdds } from "../../matchups/types/types";

export enum TEAM {
  home = 0,
  away = 1
}

export interface ITeamsVM {
  teams: Array<ITeamSeasonStats>,
  seasonTotals: ISeasonStatTotals
}

export interface ITeamVM{
  team: ITeamSeasonStats,
  games: IGameOdds
}

export interface IMatchupTeam{
  id: number,
  locationName: string,
  teamName: string,
  logoUri: string,
  vegasOdds: number,
  modelOdds: number,
  goals: number
  team: TEAM
}

export interface ITeam {
  id: number,
  locationName: string,
  teamName: string,
  logoUri: string,
}

export interface ITeamSeasonStats extends ITeam, ISeasonStatTotals{}

export interface ISeasonStatTotals {
  vegasLogLoss: number,
  modelLogLoss: number,
  totalGameCount: number,
  totalModelAccurateGameCount: number,
  totalVegasAccurateGameCount: number,
}