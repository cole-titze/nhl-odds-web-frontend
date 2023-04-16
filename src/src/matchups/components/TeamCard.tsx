import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';
import { IMatchupTeam, TEAM } from '../../teams/types/types'
import {convertDecimalToPercentString, convertDecimalToAmericanString} from '../../teams/utils/odds-utils'
import Stack from '@mui/material/Stack';

interface IProps{
    team: IMatchupTeam,
    hasBeenPlayed: boolean,
    winner: TEAM
}
function getTag(hasBeenPlayed: boolean, winner: TEAM, team: TEAM){
    if(!hasBeenPlayed)
        return;
    if(winner===team)
        return (<Chip label="Winner" color="success" size="small"/>);
    return (<Chip label="Loser" color="error" size="small"/>);
}
function TeamCard(props: IProps): JSX.Element {
    const { team, hasBeenPlayed, winner } = props;
    const logo = "team-logos/" + team.logoUri;

    return (
        <Card className="team-card">
        <CardActionArea>
        <CardContent>
        <Stack spacing={0} justifyContent="center" alignItems="center">
            <img className="image"
            src={logo}
            alt={team.locationName}
            />
            <Typography variant="h5" component="div">
                {team.teamName}
            </Typography>
            {getTag(hasBeenPlayed, winner, team.team)}
        </Stack>
        <br></br>
        <Stack justifyContent="center" direction="row"   spacing={{ xs:0, s: 1, md: 3 }}>
            <Typography component={'span'} variant="body2" color="text.secondary">
                <h5>Model Odds</h5>
                Percent: {convertDecimalToPercentString(team.modelOdds)}
                <br></br>
                American: {convertDecimalToAmericanString(team.modelOdds)}
                <br></br>
            </Typography>
            <Typography component={'span'} variant="body2" color="text.secondary">
                <h5>Vegas Odds</h5>
                Percent: {convertDecimalToPercentString(team.vegasOdds)}
                <br></br>
                American: {convertDecimalToAmericanString(team.vegasOdds)}
            </Typography>
        </Stack>
        </CardContent>
        </CardActionArea>
        </Card>
    )};
export default TeamCard;