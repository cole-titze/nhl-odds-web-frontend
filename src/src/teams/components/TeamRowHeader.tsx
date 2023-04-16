import { Stack, Typography } from '@mui/material';

function TeamRowHeader(): JSX.Element {
    return (
        <Stack spacing={5} direction="row">
            <Typography className="center-content" sx={{width: 10}} variant="body1" component="div">
                Id
            </Typography>
            <Typography className="center-content" sx={{width: 50}} variant="body1" component="div">
                Logo
            </Typography>
            <Typography sx={{width: 125}} variant="body1" component="div">
                Team Name
            </Typography>
            <Typography className="center-content" sx={{width: 150}} variant="body1" component="div">
                Model Log Loss
            </Typography>
            <Typography className="center-content" sx={{width: 150}} variant="body1" component="div">
                Vegas Log Loss
            </Typography>
            <Typography className="center-content" sx={{width: 150}} variant="body1" component="div">
                Difference
            </Typography>
        </Stack>
    );
};
export default TeamRowHeader;