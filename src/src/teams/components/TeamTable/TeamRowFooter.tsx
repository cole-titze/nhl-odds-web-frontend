import React, { memo } from "react";
import { Chip, TableCell, TableFooter, TableRow } from "@mui/material";
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
    <TableFooter>
      <TableRow>
        <TableCell align="center">Totals</TableCell>
        <TableCell align="center">-</TableCell>
        <TableCell align="center">-</TableCell>
        <TableCell align="center">{modelLogLossFormatted}</TableCell>
        <TableCell align="center">{vegasLogLossFormatted}</TableCell>
        <TableCell align="center">
          <Chip
            style={{
              color: fontColor,
              backgroundColor: backgroundColor,
            }}
            label={logLossDifFormatted}
            sx={{ height: "1.25rem" }}
          />
        </TableCell>
        <TableCell align="center">{totalModelAccurateGameCount}</TableCell>
        <TableCell align="center">{totalGameCount}</TableCell>
      </TableRow>
    </TableFooter>
  );
}
export default memo(TeamRowFooter);
