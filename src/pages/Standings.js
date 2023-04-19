import React, { useState, useEffect } from "react";
import axios from "axios";



const Standings = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get(
          "https://api.sportsdata.io/v3/mlb/scores/json/Standings/2023?key=8abed7421c744b1ba6869d7b3160c2ed"
        );
        setStandings(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStandings();
  }, []);

  // Organize standings by division
  const divisions = {};
  for (const team of standings) {
    if (!divisions[team.Division]) {
      divisions[team.Division] = [];
    }
    divisions[team.Division].push(team);
  }

  return (
    <div className="standings-container">
      <h1 className="standings-header">MLB Standings</h1>
      {Object.keys(divisions).map((division) => (
        <div className='standings-league' key={division}>
          <h2 className="standings-division">{division}</h2>
          <table>
            <thead>
              <tr>
                <th className="standings-team">Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>GB</th>
              </tr>
            </thead>
            <tbody>
              {divisions[division].map((team) => (
                <tr key={team.TeamID}>
                  <td>{team.Name}</td>
                  <td>{team.Wins}</td>
                  <td>{team.Losses}</td>
                  <td>{team.GamesBehind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Standings;