import React, { memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { ISeasonStatTotals, ITeamSeasonStats } from "../../types/types";
import TeamRowFooter from "./TeamRowFooter";
import TeamRowHeader from "./TeamRowHeader";
import TeamRow from "./TeamRow";

interface IProps {
  teams: ITeamSeasonStats[];
  seasonStatTotals: ISeasonStatTotals;
}
function TeamTable(props: IProps) {
  const { teams, seasonStatTotals } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TeamRowHeader />
        <TableBody>
          {teams.map((team) => (
            <TeamRow key={team.id} team={team} />
          ))}
        </TableBody>
        <TeamRowFooter seasonStatTotals={seasonStatTotals} />
      </Table>
    </TableContainer>
  );
}

export default memo(TeamTable);
