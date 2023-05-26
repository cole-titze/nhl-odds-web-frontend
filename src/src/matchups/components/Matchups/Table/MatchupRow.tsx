import React, { memo } from "react";
import { TableRow, TableCell, Skeleton } from "@mui/material";
import { IGameOdds } from "../../../types/types";
import ModelPredictionChip from "../../../../sdk/components/ModelPredictionChip";
import convertToLocalTime from "../../../utils/convert-to-local-time";

interface IProps {
  matchup: IGameOdds;
  isLoading: boolean;
}
function TeamRow(props: IProps) {
  const { matchup, isLoading } = props;
  const { homeTeam, awayTeam, gameDate } = matchup;

  const homeLogo = "../team-logos/" + homeTeam.logoUri;
  const awayLogo = "../team-logos/" + awayTeam.logoUri;

  return (
    <TableRow
      className="TeamRow"
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center" component="th" scope="row">
        {isLoading ? (
          <Skeleton
            component={"span"}
            animation="wave"
            variant="rounded"
            width={110}
            height={15}
          />
        ) : (
          convertToLocalTime(gameDate)
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton
            component={"span"}
            animation="wave"
            variant="rounded"
            width={110}
            height={15}
          />
        ) : (
          homeTeam.teamName
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
          <img
            className="TeamListImage"
            src={homeLogo}
            alt={homeTeam.locationName}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton
            component={"span"}
            animation="wave"
            variant="rounded"
            width={30}
            height={15}
          />
        ) : (
          homeTeam.goals
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton
            component={"span"}
            animation="wave"
            variant="rounded"
            width={110}
            height={15}
          />
        ) : (
          awayTeam.teamName
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
          <img
            className="TeamListImage"
            src={awayLogo}
            alt={awayTeam.locationName}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton
            component={"span"}
            animation="wave"
            variant="rounded"
            width={30}
            height={15}
          />
        ) : (
          awayTeam.goals
        )}
      </TableCell>
      <TableCell align="center">
        {isLoading ? (
          <Skeleton
            component={"span"}
            animation="wave"
            variant="rounded"
            width={80}
            height={15}
          />
        ) : (
          <ModelPredictionChip matchup={matchup} />
        )}
      </TableCell>
    </TableRow>
  );
}
export default memo(TeamRow);
