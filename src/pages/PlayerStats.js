import React, { useState } from 'react';
import axios from 'axios';

const PlayerStats = () => {
  const [searchText, setSearchText] = useState('');
  const [playerStats, setPlayerStats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await axios.get(
        `https://api.sportsdata.io/v3/mlb/stats/json/PlayerSeasonHomeStats/${searchText}?key=8abed7421c744b1ba6869d7b3160c2edd`
      );
      setPlayerStats(response.data);
    } catch (error) {
      setErrorMessage('Error retrieving player stats');
    }
    setIsLoading(false);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const renderStats = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (errorMessage) {
      return <p>{errorMessage}</p>;
    } else if (playerStats.length === 0) {
      return <p>No stats to display</p>;
    } else {
      return (
        <div>
          <h2>{playerStats[0].Name}</h2>
          <ul>
            <li>Games: {playerStats[0].Games}</li>
            <li>At Bats: {playerStats[0].AtBats}</li>
            <li>Hits: {playerStats[0].Hits}</li>
            <li>Home Runs: {playerStats[0].HomeRuns}</li>
            <li>RBIs: {playerStats[0].RunsBattedIn}</li>
            <li>Stolen Bases: {playerStats[0].StolenBases}</li>
            <li>Batting Average: {playerStats[0].BattingAverage}</li>
            <li>On Base Percentage: {playerStats[0].OnBasePercentage}</li>
            <li>Slugging Percentage: {playerStats[0].SluggingPercentage}</li>
            <li>Slugging Percentage: {playerStats[0].OnBasePlusSlugging}</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Player Stats</h1>
      <form onSubmit={handleSubmit}>
        <label>
         Player Search:
          <input type="text" value={searchText} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {renderStats()}
    </div>
  );
};

export default PlayerStats;