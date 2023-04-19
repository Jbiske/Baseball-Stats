import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MLB Stats</Link>
        </div>
        <div className="navbar-links">
          <ul className="navbar-list">
            <li className="navbar-item">
            </li>
            <li className="navbar-item">
              <Link to="/playerstats" className="navbar-link">
                Player Stats
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/teamstats" className="navbar-link">
                Team Stats
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/standings" className="navbar-link">
                Standings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
