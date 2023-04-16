export enum TEAM {
    home = 0,
    away = 1
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
    vegasLogLoss: number,
    modelLogLoss: number
  }