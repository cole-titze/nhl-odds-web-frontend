import React, { memo } from "react";
import { ITeamSeasonStats } from "../../types/types";
import { Typography, Card, CardContent, Chip, Skeleton } from "@mui/material";
import {
  GetBackgroundColor,
  GetFontColor,
} from "../../utils/get-log-loss-color";
import Block from "../../../sdk/components/Block";

interface IProps {
  team: ITeamSeasonStats;
  year: number;
  isLoading: boolean;
}
function Team(props: IProps) {
  const { team, isLoading } = props;
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
          {isLoading ? (
            <Skeleton
              className="TeamBioImage"
              animation="wave"
              variant="circular"
              width={60}
              height={60}
            />
          ) : (
            <img className="TeamBioImage" src={logo} alt={team.locationName} />
          )}
          {isLoading ? (
            <Skeleton
              animation="wave"
              variant="rounded"
              width={100}
              height={30}
            />
          ) : (
            <Typography className="TeamBioCardHeaderText">
              {team.seasonWins + "W " + team.seasonLosses + "L"}
            </Typography>
          )}
        </Block>
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rounded"
            width={175}
            height={20}
            style={{ marginBottom: 8 }}
          />
        ) : (
          <Typography>{"Model Log Loss: " + modelLogLossFormatted}</Typography>
        )}
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rounded"
            width={175}
            height={20}
            style={{ marginBottom: 8 }}
          />
        ) : (
          <Typography>{"Vegas Log Loss: " + vegasLogLossFormatted}</Typography>
        )}
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rounded"
            width={175}
            height={20}
          />
        ) : (
          <>
            <Typography component={"span"}>{"Difference: "}</Typography>
            <Chip
              sx={{ height: "1rem" }}
              style={{
                color: fontColor,
                backgroundColor: backgroundColor,
              }}
              label={logLossDifFormatted}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
}
export default memo(Team);
