import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import convertToLocalTime from '../utils/convert-to-local-time'
interface IProps{
    gameDate: Date
}
function AtCard(props: IProps): JSX.Element {
    const { gameDate } = props;

    return (
        <Card className="team-at">
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
            @
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
            {convertToLocalTime(gameDate)}
        </Typography>
        </CardContent>
        </Card>
    )};
export default AtCard;
