import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CardActionArea, Skeleton } from "@mui/material";
import { IMatchupTeam, TEAM } from "../../../teams/types/types";
import {
  convertDecimalToPercentString,
  convertDecimalToAmericanString,
} from "../../../teams/utils/odds-utils";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

interface IProps {
  team: IMatchupTeam;
  hasBeenPlayed: boolean;
  winner: TEAM;
  isLoading: boolean;
}
function TeamCard(props: IProps): JSX.Element {
  const { team, hasBeenPlayed, winner, isLoading } = props;
  const logo = "team-logos/" + team.logoUri;

  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/team/${id}`);
  };

  return (
    <Card className="TeamCard Theme">
      <CardActionArea onClick={() => handleClick(team.id)}>
        <CardContent>
          <Stack spacing={0} justifyContent="center" alignItems="center">
            {isLoading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={100}
                height={80}
                style={{ marginBottom: 6 }}
              />
            ) : (
              <img className="Image" src={logo} alt={team.locationName} />
            )}
            <Typography variant="h5" component="div">
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={100}
                  height={20}
                  style={{ marginBottom: 6 }}
                />
              ) : (
                team.teamName
              )}
            </Typography>
            {isLoading ? (
              <Skeleton
                animation="wave"
                variant="rounded"
                width={60}
                height={20}
              />
            ) : (
              getTag(hasBeenPlayed, winner, team.team)
            )}
          </Stack>
          <br></br>
          <Stack
            justifyContent="center"
            direction="row"
            spacing={{ xs: 0, s: 1, md: 3 }}
          >
            <Typography component={"span"} className="Theme" variant="body2">
              <h5>Model Odds</h5>
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={90}
                  height={12}
                  style={{ marginBottom: 8 }}
                />
              ) : (
                "Percent: " +
                convertDecimalToPercentString(team.modelOdds) +
                "\n"
              )}
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={90}
                  height={12}
                />
              ) : (
                "American: " + convertDecimalToAmericanString(team.modelOdds)
              )}
              <br></br>
            </Typography>
            <Typography component={"span"} variant="body2" className="Theme">
              <h5>Vegas Odds</h5>
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={90}
                  height={12}
                  style={{ marginBottom: 8 }}
                />
              ) : (
                "Percent: " +
                convertDecimalToPercentString(team.vegasOdds) +
                "\n"
              )}
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={90}
                  height={12}
                />
              ) : (
                "American: " + convertDecimalToAmericanString(team.vegasOdds)
              )}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function getTag(hasBeenPlayed: boolean, winner: TEAM, team: TEAM) {
  if (!hasBeenPlayed) return;
  if (winner === team)
    return <Chip label="Winner" color="success" size="small" />;
  return <Chip label="Loser" color="error" size="small" />;
}

export default memo(TeamCard);
