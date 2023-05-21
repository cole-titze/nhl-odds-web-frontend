import React, { memo } from 'react';
import { IGameOdds } from '../../types/types'
import { Grid } from '@mui/material';
import TeamCard from './TeamCard';
import AtCard from './AtCard';
import ScoreCard from './ScoreCard';

interface IProps{
    matchups: IGameOdds[]
}
function Matchups(props: IProps) {
    const { matchups } = props;

    return (
        <Grid container sx={{ direction:"column", alignItems:"center", justify:"center" }}>
        {matchups.map(( {id, gameDate, winner, hasBeenPlayed, homeTeam, awayTeam }) => {
        return (
        <Grid container key={id} className="MatchupRow">        
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
            <TeamCard team={awayTeam} winner={winner} hasBeenPlayed={hasBeenPlayed}/>
            </Grid>
            <Grid item xs={2}>
                <ScoreCard homeGoals={homeTeam.goals} awayGoals={awayTeam.goals} hasBeenPlayed={hasBeenPlayed}/>
                <AtCard gameDate={gameDate}/>
            </Grid>
            <Grid item xs={3}>
            <TeamCard team={homeTeam} winner={winner} hasBeenPlayed={hasBeenPlayed}/>
            </Grid>
            <Grid item xs={2}></Grid>
            </Grid>
            )
        }
    )}
        </Grid>
    )
};

export default memo(Matchups);