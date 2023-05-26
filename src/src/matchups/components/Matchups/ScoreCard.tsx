import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";

interface IProps {
  homeGoals: number;
  awayGoals: number;
  hasBeenPlayed: boolean;
  isLoading: boolean;
}
function ScoreCard(props: IProps) {
  const { homeGoals, awayGoals, hasBeenPlayed, isLoading } = props;
  const score = hasBeenPlayed ? (
    <>
      {awayGoals} - {homeGoals}
    </>
  ) : (
    <>TBD</>
  );

  return (
    <Card className="TeamScore Theme">
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          Score
        </Typography>
        <Typography variant="body1" className="Theme" align="center">
          {isLoading ? (
            <Skeleton
              animation="wave"
              variant="rounded"
              width={160}
              height={15}
            />
          ) : (
            score
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default memo(ScoreCard);
