import React, { memo } from "react";
import { ITeamSeasonStats } from "../../types/types";
import { Typography, Card, CardContent, Chip } from "@mui/material";
import {
  GetBackgroundColor,
  GetFontColor,
} from "../../utils/get-log-loss-color";

interface IProps {
  team: ITeamSeasonStats;
  year: number;
}
function Team(props: IProps) {
  const { team } = props;
  const logLossDif = team.modelLogLoss - team.vegasLogLoss;
  const logLossDifFormatted = logLossDif.toFixed(4);
  const vegasLogLossFormatted = team.vegasLogLoss.toFixed(4);
  const modelLogLossFormatted = team.modelLogLoss.toFixed(4);
  const totalGameCount = team.totalGameCount;
  const fontColor = GetFontColor(logLossDif);
  const backgroundColor = GetBackgroundColor(logLossDif);

  const logo = "../team-logos/" + team.logoUri;

  return (
    <Card className="Team">
      <CardContent>
        <img className="TeamImage" src={logo} alt={team.locationName} />
        <Typography>
          {team.seasonWins + "W " + team.seasonLosses + "L"}
        </Typography>
        <Typography>{"Model Log Loss: " + modelLogLossFormatted}</Typography>
        <Typography>{"Vegas Log Loss: " + vegasLogLossFormatted}</Typography>
        <Typography component={"span"}>{"Difference: "}</Typography>
        <Chip
          style={{
            color: fontColor,
            backgroundColor: backgroundColor,
          }}
          label={logLossDifFormatted}
        />
        <Typography>{"Total Games Played: " + totalGameCount}</Typography>
      </CardContent>
    </Card>
  );
}
export default memo(Team);
