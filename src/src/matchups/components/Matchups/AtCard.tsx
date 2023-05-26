import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import convertToLocalTime from "../../utils/convert-to-local-time";
import { Skeleton } from "@mui/material";

interface IProps {
  gameDate: Date;
  isLoading: boolean;
}
function AtCard(props: IProps) {
  const { gameDate, isLoading } = props;

  return (
    <Card className="TeamAt Theme">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          @
        </Typography>
        <Typography className="Theme" variant="body2" align="center">
          {isLoading ? (
            <Skeleton
              animation="wave"
              variant="rounded"
              width={160}
              height={15}
              style={{ marginBottom: 6 }}
            />
          ) : (
            convertToLocalTime(gameDate)
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default memo(AtCard);
