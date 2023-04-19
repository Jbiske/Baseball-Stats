import React from 'react';
import { Link } from 'react-router-dom';
import sho from './imgs/sho.jpg'
import stand from './imgs/standings.jpg'
import teams from './imgs/teams.jpg'

function Home() {
  return (
    <div className="homepage-container">
      <h1>Welcome To My MLB Stats REACT App!</h1>
      <div className="homepage-sections">
        <Link to="/playerstats" className="homepage-section">
          <img src={sho}  alt="Player Stats" />
          <h3>Player Stats</h3>
          <p>View statistics for MLB players.</p>
        </Link>
        <Link to="/teamstats" className="homepage-section">
          <img src={teams} alt="Team Stats" />
          <h3>Team Stats</h3>
          <p>View statistics for MLB teams.</p>
        </Link>
        <Link to="/standings" className="homepage-section">
          <img src={stand} alt="Standings" />
          <h3>Standings</h3>
          <p>View current standings for MLB teams.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home