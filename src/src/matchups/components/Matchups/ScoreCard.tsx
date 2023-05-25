import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface IProps {
  homeGoals: number;
  awayGoals: number;
  hasBeenPlayed: boolean;
}
function ScoreCard(props: IProps) {
  const { homeGoals, awayGoals, hasBeenPlayed } = props;
  return (
    <Card className="TeamScore Theme">
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          Score
        </Typography>
        <Typography variant="body1" className="Theme" align="center">
          {hasBeenPlayed ? (
            <>
              {awayGoals} - {homeGoals}
            </>
          ) : (
            <>TBD</>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default memo(ScoreCard);
