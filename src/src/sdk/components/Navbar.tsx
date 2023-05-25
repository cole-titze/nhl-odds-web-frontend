import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../../../styles/index";
import DarkModeToggle from "./DarkModeToggle";

interface IProps {
  onToggle: () => void;
}
function Navbar(props: IProps) {
  const { onToggle } = props;
  return (
    <nav
      data-testid="navbar"
      className="Navbar navbar navbar-expand navbar-dark header"
    >
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
      <DarkModeToggle onToggle={onToggle} />
    </nav>
  );
}

export default memo(Navbar);
