import { Link } from "react-router-dom";
import "../../../styles/index.tsx";

export default function Navbar() {
    return (
        <nav className="Navbar navbar navbar-expand navbar-dark bg-dark header">
        <a href="/odds" className="navbar-brand">
          Nhl Odds
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/odds"} className="nav-link">
              Matchups
            </Link>
          </li>
          <li>
            <Link to={"/teams"} className="nav-link">
              Teams
            </Link>
          </li>
        </div>
      </nav>
    );
}