import { Chip, Stack, Typography } from '@mui/material';
import { ISeasonStatTotals } from '../../types/types';
import { GetBackgroundColor, GetFontColor } from '../../utils/logLossColorUtils';

interface IProps{
    seasonStatTotals: ISeasonStatTotals
}

function TeamRowHeader(props: IProps): JSX.Element {
    const { seasonStatTotals } = props;
    const { vegasLogLossTotal, modelLogLossTotal, totalGameCount, totalModelAccurateGameCount } = seasonStatTotals;

    const logLossDif = (modelLogLossTotal - vegasLogLossTotal);
    const logLossDifFormatted = logLossDif.toFixed(4);
    const vegasLogLoss = vegasLogLossTotal.toFixed(4);
    const modelLogLoss = modelLogLossTotal.toFixed(4);
    const fontColor = GetFontColor(logLossDif);
    const backgroundColor = GetBackgroundColor(logLossDif);

    return (
        <Stack spacing={5} direction="row">
            <Typography className="center-content" sx={{width: 10}} variant="body1" component="div">
                Totals
            </Typography>
            <Typography className="center-content" sx={{width: 50}} variant="body1" component="div">
            </Typography>
            <Typography sx={{width: 125}} variant="body1" component="div">
                -
            </Typography>
            <Typography className="center-content" sx={{width: 150}} variant="body1" component="div">
                {modelLogLoss}
            </Typography>
            <Typography className="center-content" sx={{width: 150}} variant="body1" component="div">
                {vegasLogLoss}
            </Typography>
            <Typography className="center-content" sx={{width: 150}} variant="body1" component="div">
                <Chip style={{color:fontColor, backgroundColor:backgroundColor}} label={logLossDifFormatted}/>
            </Typography>
            <Typography className="center-content" sx={{width: 150}} variant="body1" component="div">
                {(totalModelAccurateGameCount)}
            </Typography>
            <Typography className="center-content" sx={{width: 150}} variant="body1" component="div">
                {totalGameCount}
            </Typography>
        </Stack>
    );
};
export default TeamRowHeader;