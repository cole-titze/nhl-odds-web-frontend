import React, { memo } from "react";
import { ITeamSeasonStats } from "../../types/types";
import { TableRow, TableCell, Chip, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  GetBackgroundColor,
  GetFontColor,
} from "../../utils/get-log-loss-color";

interface IProps {
  team: ITeamSeasonStats;
  isLoading: boolean;
}
function TeamRow(props: IProps) {
  const { team, isLoading } = props;
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
        {isLoading ? (
          <Skeleton animation="wave" variant="rounded" width={15} height={10} />
        ) : (
          id
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="circular"
            width={30}
            height={30}
          />
        ) : (
          <img className="TeamListImage" src={logo} alt={locationName} />
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rounded"
            width={100}
            height={12}
          />
        ) : (
          teamName
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton animation="wave" variant="rounded" width={75} height={15} />
        ) : (
          modelLogLossFormatted
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton animation="wave" variant="rounded" width={75} height={15} />
        ) : (
          vegasLogLossFormatted
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton animation="wave" variant="rounded" width={75} height={15} />
        ) : (
          <Chip
            sx={{ height: "1.25rem" }}
            style={{
              color: fontColor,
              backgroundColor: backgroundColor,
            }}
            label={logLossDifFormatted}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton animation="wave" variant="rounded" width={25} height={15} />
        ) : (
          totalModelAccurateGameCount
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton animation="wave" variant="rounded" width={25} height={12} />
        ) : (
          totalGameCount
        )}
      </TableCell>
    </TableRow>
  );
}
export default memo(TeamRow);
