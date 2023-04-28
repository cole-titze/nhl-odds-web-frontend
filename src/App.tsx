import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./src/sdk/components/Navbar";
import { Routes, Route } from "react-router-dom";
import TeamListView from './src/teams/components/TeamListView';
import MatchupView from './src/matchups/components/MatchupView';


export default function App() {
  return (
    <div data-testid="app" className="App">
      <Navbar />
      <div className="container mt-3 main">
        <Routes>
          <Route path="/" element={<MatchupView/>} />
          <Route path="/odds" element={<MatchupView/>} />
          <Route path="/teams" element={<TeamListView/>} />
        </Routes>
      </div>
    </div>
  );
}
