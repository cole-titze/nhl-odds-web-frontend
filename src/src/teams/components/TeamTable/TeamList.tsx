import React, { memo } from "react";
import { ISeasonStatTotals, ITeamSeasonStats } from "../../types/types";
import { CardActionArea, Card, CardContent } from "@mui/material";
import TeamRow from "./TeamRow";
import TeamRowHeader from "./TeamRowHeader";
import TeamRowFooter from "./TeamRowFooter";
import { Link as RouterLink } from "react-router-dom";
interface IProps {
  teams: ITeamSeasonStats[];
  seasonStatTotals: ISeasonStatTotals;
}
function TeamList(props: IProps) {
  const { teams, seasonStatTotals } = props;

  return (
    <div>
      <Card className="TeamListCard">
        <CardContent>
          <TeamRowHeader />
        </CardContent>
      </Card>
      {teams.map(
        ({
          id,
          teamName,
          locationName,
          logoUri,
          vegasLogLoss,
          modelLogLoss,
          totalGameCount,
          totalModelAccurateGameCount,
          totalVegasAccurateGameCount,
        }) => {
          return (
            <Card key={id} className="TeamListCard">
              <CardActionArea component={RouterLink} to={"/team/" + id}>
                <CardContent>
                  <TeamRow
                    team={{
                      id,
                      teamName,
                      locationName,
                      logoUri,
                      vegasLogLoss,
                      modelLogLoss,
                      totalGameCount,
                      totalModelAccurateGameCount,
                      totalVegasAccurateGameCount,
                    }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          );
        }
      )}
      <Card className="TeamListCard">
        <CardContent>
          <TeamRowFooter seasonStatTotals={seasonStatTotals} />
        </CardContent>
      </Card>
    </div>
  );
}
export default memo(TeamList);
