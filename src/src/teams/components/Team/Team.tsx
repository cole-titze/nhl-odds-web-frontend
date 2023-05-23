import React, { memo } from "react";
import { ITeamSeasonStats } from "../../types/types";
import { Typography, Card, CardContent, Chip } from "@mui/material";
import {
  GetBackgroundColor,
  GetFontColor,
} from "../../utils/get-log-loss-color";
import Block from "../../../sdk/components/Block";

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
  const fontColor = GetFontColor(logLossDif);
  const backgroundColor = GetBackgroundColor(logLossDif);

  const logo = "../team-logos/" + team.logoUri;

  return (
    <Card className="Team">
      <CardContent className="Team">
        <Block>
          <img className="TeamBioImage" src={logo} alt={team.locationName} />
          <Typography className="TeamBioCardHeaderText">
            {team.seasonWins + "W " + team.seasonLosses + "L"}
          </Typography>
        </Block>
        <Typography>{"Model Log Loss: " + modelLogLossFormatted}</Typography>
        <Typography>{"Vegas Log Loss: " + vegasLogLossFormatted}</Typography>
        <Typography component={"span"}>{"Difference: "}</Typography>
        <Chip
          sx={{ height: "1rem" }}
          style={{
            color: fontColor,
            backgroundColor: backgroundColor,
          }}
          label={logLossDifFormatted}
        />
      </CardContent>
    </Card>
  );
}
export default memo(Team);
