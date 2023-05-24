import React, { memo } from "react";
import { Chip } from "@mui/material";
import { IGameOdds } from "../../matchups/types/types";
import { TEAM } from "../../teams/types/types";

interface IProps {
  matchup: IGameOdds;
}
function Team(props: IProps) {
  const { matchup } = props;

  const fontColor = "black";
  const label = matchup.homeTeam.modelOdds > 0.5 ? "Home" : "Away";

  let backgroundColor = "";
  if (!matchup.hasBeenPlayed) {
    backgroundColor = "";
  } else if (
    (matchup.winner == TEAM.home && matchup.homeTeam.modelOdds > 0.5) ||
    (matchup.winner == TEAM.away && matchup.awayTeam.modelOdds > 0.5)
  ) {
    backgroundColor = "lightgreen";
  } else {
    backgroundColor = "pink";
  }

  return (
    <Chip
      sx={{ height: "1rem" }}
      style={{
        color: fontColor,
        backgroundColor: backgroundColor,
      }}
      label={label}
    />
  );
}
export default memo(Team);
