import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamStats = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamStats, setTeamStats] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get(
        "https://api.sportsdata.io/v3/mlb/scores/json/teams?key=8abed7421c744b1ba6869d7b3160c2ed"
      );
      setTeams(response.data);
    };

    fetchTeams();
  }, []);

  const handleTeamChange = async (event) => {
    const teamId = event.target.value;
    setSelectedTeam(teamId);

    const response = await axios.get(
      `https://api.sportsdata.io/v3/mlb/stats/json/TeamSeasonStatsByTeam/${teamId}?key=8abed7421c744b1ba6869d7b3160c2ed`
    );
    setTeamStats(response.data);
  };

  return (
    <div>
      <h1>Team Stats</h1>
      <label>
        Select a team:
        <select value={selectedTeam} onChange={handleTeamChange}>
          <option value="">Select a team</option>
          {teams.map((team) => (
            <option key={team.TeamID} value={team.TeamID}>
              {team.Name}
            </option>
          ))}
        </select>
      </label>
      {teamStats && (
        <div>
          <h2>{teamStats[0].Name}</h2>
          <p>Wins: {teamStats[0].Wins}</p>
          <p>Losses: {teamStats[0].Losses}</p>
          <p>Runs Scored: {teamStats[0].RunsScored}</p>
          <p>Runs Allowed: {teamStats[0].RunsAllowed}</p>
          <p>Home Runs: {teamStats[0].HomeRuns}</p>
        </div>
      )}
    </div>
  );
};

export default TeamStats;