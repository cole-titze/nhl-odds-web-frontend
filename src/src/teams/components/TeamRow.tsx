import { ITeam } from '../types/types'
import { Stack, Typography, Container, Chip } from '@mui/material';
import { GetBackgroundColor, GetFontColor } from '../utils/logLossColorUtils';

interface IProps{
    team: ITeam
}
function TeamRow(props: IProps): JSX.Element {
    const { team } = props;
    const logLossDif = (team.modelLogLoss - team.vegasLogLoss);
    const logLossDifFormatted = logLossDif.toFixed(4);
    const vegasLogLoss = team.vegasLogLoss.toFixed(4);
    const modelLogLoss = team.modelLogLoss.toFixed(4);
    const fontColor = GetFontColor(logLossDif);
    const backgroundColor = GetBackgroundColor(logLossDif);

    const logo = "team-logos/" + team.logoUri;


    return (
        <Stack spacing={5} direction="row">
            <Typography className="center-content" sx={{width: 10}} variant="body1" component="div">
                {team.id}
            </Typography>
            <Container sx={{width: 50}} component="div">
                <img className="team-image"
                src={logo}
                alt={team.locationName}
                />
            </Container>
            <Typography sx={{width: 125}} component="div" variant="body1">
                {team.teamName}
            </Typography>
            <Typography className="center-content" sx={{width: 150}} component="div" variant="body1">
                {modelLogLoss}
            </Typography>
            <Typography className="center-content"  sx={{width: 150}} component="div" variant="body1">
                {vegasLogLoss}
            </Typography>
            <Container className="center-content" sx={{width: 150}} component="div">
                <Chip style={{color:fontColor, backgroundColor:backgroundColor}} label={logLossDifFormatted} />
            </Container>
        </Stack>
    );
};
export default TeamRow;