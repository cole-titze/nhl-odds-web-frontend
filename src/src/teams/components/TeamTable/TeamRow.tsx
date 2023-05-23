import React, { memo } from "react";
import { ITeamSeasonStats } from "../../types/types";
import { TableRow, TableCell, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  GetBackgroundColor,
  GetFontColor,
} from "../../utils/get-log-loss-color";

interface IProps {
  team: ITeamSeasonStats;
}
function TeamRow(props: IProps) {
  const { team } = props;
  const {
    id,
    teamName,
    vegasLogLoss,
    modelLogLoss,
    totalGameCount,
    totalModelAccurateGameCount,
    logoUri,
    locationName,
  } = team;
  const logLossDif = modelLogLoss - vegasLogLoss;
  const logLossDifFormatted = logLossDif.toFixed(4);
  const vegasLogLossFormatted = team.vegasLogLoss.toFixed(4);
  const modelLogLossFormatted = team.modelLogLoss.toFixed(4);
  const fontColor = GetFontColor(logLossDif);
  const backgroundColor = GetBackgroundColor(logLossDif);

  const logo = "team-logos/" + logoUri;

  const navigate = useNavigate();
  const handleRowClick = (id: number) => {
    navigate(`/team/${id}`);
  };

  return (
    <TableRow
      onClick={() => handleRowClick(id)}
      className="TeamRow"
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center" component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="center">
        <img className="TeamListImage" src={logo} alt={locationName} />
      </TableCell>
      <TableCell align="center">{teamName}</TableCell>
      <TableCell align="center">{modelLogLossFormatted}</TableCell>
      <TableCell align="center">{vegasLogLossFormatted}</TableCell>
      <TableCell align="center">
        <Chip
          style={{
            color: fontColor,
            backgroundColor: backgroundColor,
          }}
          label={logLossDifFormatted}
        />
      </TableCell>
      <TableCell align="center">{totalModelAccurateGameCount}</TableCell>
      <TableCell align="center">{totalGameCount}</TableCell>
    </TableRow>
  );
}
export default memo(TeamRow);
