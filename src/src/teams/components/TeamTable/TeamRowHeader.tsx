import { Stack, Typography } from '@mui/material';

function TeamRowHeader(): JSX.Element {
    return (
        <Stack spacing={5} direction="row">
            <Typography className="CenterContent" sx={{width: 10}} variant="body1" component="div">
                Id
            </Typography>
            <Typography className="CenterContent" sx={{width: 50}} variant="body1" component="div">
                Logo
            </Typography>
            <Typography sx={{width: 125}} variant="body1" component="div">
                Team Name
            </Typography>
            <Typography className="CenterContent" sx={{width: 150}} variant="body1" component="div">
                Model Log Loss
            </Typography>
            <Typography className="CenterContent" sx={{width: 150}} variant="body1" component="div">
                Vegas Log Loss
            </Typography>
            <Typography className="CenterContent" sx={{width: 150}} variant="body1" component="div">
                Difference
            </Typography>
            <Typography className="CenterContent" sx={{width: 150}} variant="body1" component="div">
                Correct Count
            </Typography>
            <Typography className="CenterContent" sx={{width: 150}} variant="body1" component="div">
                Games Played
            </Typography>
        </Stack>
    );
};
export default TeamRowHeader;