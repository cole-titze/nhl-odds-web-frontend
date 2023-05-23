import React, { memo } from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

function TeamRowHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Id</TableCell>
        <TableCell align="center">Logo</TableCell>
        <TableCell align="center">Team Name</TableCell>
        <TableCell align="center">Model Log Loss</TableCell>
        <TableCell align="center">Vegas Log Loss</TableCell>
        <TableCell align="center">Difference</TableCell>
        <TableCell align="center">Correct Count</TableCell>
        <TableCell align="center">Games Played</TableCell>
      </TableRow>
    </TableHead>
  );
}
export default memo(TeamRowHeader);
