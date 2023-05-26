import React, { memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { IGameOdds } from "../../types/types";
import MatchupRowHeader from "./Table/MatchupRowHeader";
import MatchupRow from "./Table/MatchupRow";

interface IProps {
  matchups: IGameOdds[];
  isLoading: boolean;
}
function MatchupTable(props: IProps) {
  const { matchups, isLoading } = props;

  return (
    <TableContainer className="MatchupTable" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <MatchupRowHeader />
        <TableBody>
          {matchups.map((matchup) => (
            <MatchupRow
              key={matchup.id}
              matchup={matchup}
              isLoading={isLoading}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default memo(MatchupTable);
