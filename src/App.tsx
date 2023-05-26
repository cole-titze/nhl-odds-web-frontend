import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./src/sdk/components/Navbar";
import { Routes, Route } from "react-router-dom";
import TeamListView from "./src/teams/components/TeamListView";
import MatchupView from "./src/matchups/components/MatchupView";
import TeamView from "./src/teams/components/TeamView";
import { ThemeProvider } from "@emotion/react";
import { createTheme, Theme } from "@mui/material";

export default function App() {
  let theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [appTheme, setTheme] = React.useState<Theme>(theme);

  const toggleTheme = () => {
    theme =
      appTheme.palette.mode === "light"
        ? createTheme({
            palette: {
              mode: "dark",
            },
          })
        : createTheme({
            palette: {
              mode: "light",
            },
          });
    setTheme(theme);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <div data-testid="app" className="App">
        <Navbar onToggle={toggleTheme} />
        <div className="container mt-3 main">
          <Routes>
            <Route path="/" element={<MatchupView />} />
            <Route path="/odds" element={<MatchupView />} />
            <Route path="/teams" element={<TeamListView />} />
            <Route path="/team/:teamId" element={<TeamView />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
