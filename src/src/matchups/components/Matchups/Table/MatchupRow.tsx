import React, { memo } from "react";
import { TableRow, TableCell } from "@mui/material";
import { IGameOdds } from "../../../types/types";
import ModelPredictionChip from "../../../../sdk/components/ModelPredictionChip";
import convertToLocalTime from "../../../utils/convert-to-local-time";

interface IProps {
  matchup: IGameOdds;
}
function TeamRow(props: IProps) {
  const { matchup } = props;
  const { homeTeam, awayTeam, gameDate } = matchup;

  const homeLogo = "../team-logos/" + homeTeam.logoUri;
  const awayLogo = "../team-logos/" + awayTeam.logoUri;

  return (
    <TableRow
      className="TeamRow"
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center" component="th" scope="row">
        {convertToLocalTime(gameDate)}
      </TableCell>
      <TableCell align="center">{homeTeam.teamName}</TableCell>
      <TableCell align="center">
        <img
          className="TeamListImage"
          src={homeLogo}
          alt={homeTeam.locationName}
        />
      </TableCell>
      <TableCell align="center">{homeTeam.goals}</TableCell>
      <TableCell align="center">{awayTeam.teamName}</TableCell>
      <TableCell align="center">
        <img
          className="TeamListImage"
          src={awayLogo}
          alt={awayTeam.locationName}
        />
      </TableCell>{" "}
      <TableCell align="center">{awayTeam.goals}</TableCell>
      <TableCell align="center">
        <ModelPredictionChip matchup={matchup} />
      </TableCell>
    </TableRow>
  );
}
export default memo(TeamRow);
