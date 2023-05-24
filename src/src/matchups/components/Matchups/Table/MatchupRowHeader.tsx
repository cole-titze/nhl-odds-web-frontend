import React, { memo } from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

function MatchupRowHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Game Date</TableCell>
        <TableCell align="center">Home Team Name</TableCell>
        <TableCell align="center">Home Logo</TableCell>
        <TableCell align="center">Home Goals</TableCell>
        <TableCell align="center">Away Team Name</TableCell>
        <TableCell align="center">Away Logo</TableCell>
        <TableCell align="center">Away Goals</TableCell>
        <TableCell align="center">Model Prediction</TableCell>
      </TableRow>
    </TableHead>
  );
}
export default memo(MatchupRowHeader);
