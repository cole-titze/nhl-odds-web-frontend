import React, { memo } from "react";
import { Chip, Stack, Typography } from "@mui/material";
import { ISeasonStatTotals } from "../../types/types";
import {
  GetBackgroundColor,
  GetFontColor,
} from "../../utils/get-log-loss-color";

interface IProps {
  seasonStatTotals: ISeasonStatTotals;
}

function TeamRowFooter(props: IProps) {
  const { seasonStatTotals } = props;
  const {
    vegasLogLoss,
    modelLogLoss,
    totalGameCount,
    totalModelAccurateGameCount,
  } = seasonStatTotals;

  const logLossDif = modelLogLoss - vegasLogLoss;
  const logLossDifFormatted = logLossDif.toFixed(4);
  const vegasLogLossFormatted = vegasLogLoss.toFixed(4);
  const modelLogLossFormatted = modelLogLoss.toFixed(4);
  const fontColor = GetFontColor(logLossDif);
  const backgroundColor = GetBackgroundColor(logLossDif);

  return (
    <Stack spacing={5} direction="row">
      <Typography
        className="CenterContent"
        sx={{ width: 10 }}
        variant="body1"
        component="div"
      >
        Totals
      </Typography>
      <Typography
        className="CenterContent"
        sx={{ width: 50 }}
        variant="body1"
        component="div"
      ></Typography>
      <Typography sx={{ width: 125 }} variant="body1" component="div">
        -
      </Typography>
      <Typography
        className="CenterContent"
        sx={{ width: 150 }}
        variant="body1"
        component="div"
      >
        {modelLogLossFormatted}
      </Typography>
      <Typography
        className="CenterContent"
        sx={{ width: 150 }}
        variant="body1"
        component="div"
      >
        {vegasLogLossFormatted}
      </Typography>
      <Typography
        className="CenterContent"
        sx={{ width: 150 }}
        variant="body1"
        component="div"
      >
        <Chip
          style={{ color: fontColor, backgroundColor: backgroundColor }}
          label={logLossDifFormatted}
        />
      </Typography>
      <Typography
        className="CenterContent"
        sx={{ width: 150 }}
        variant="body1"
        component="div"
      >
        {totalModelAccurateGameCount}
      </Typography>
      <Typography
        className="CenterContent"
        sx={{ width: 150 }}
        variant="body1"
        component="div"
      >
        {totalGameCount}
      </Typography>
    </Stack>
  );
}
export default memo(TeamRowFooter);
