import React from "react";
import MenuBar from "../components/MenuBar";
import { useGameContext } from "../context/GameContext";
import "../styles/styles.css";

function Settings() {
  const { state, dispatch } = useGameContext();
  const { teams } = state;

  const addTeam = () => {
    const teamName = prompt("Enter the new team's name:");
    if (teamName) {
      dispatch({
        type: "ADD_TEAM",
        payload: { id: Date.now(), name: teamName, points: 0, hand: [], activeCards: [] },
      });
    }
  };

  const resetGameData = () => {
    if (window.confirm("Are you sure you want to reset all game data? This action cannot be undone.")) {
      dispatch({ type: "RESET_GAME_DATA" });
    }
  };

  return (
    <div>
      <MenuBar />
      <button className="toggle-mode" id="toggle-mode-btn">
        <span className="toggle-mode-text">Light Mode</span>
      </button>
      <div className="container">
        <div className="button-group">
          <button className="add-team" onClick={addTeam}>Add New Team</button>
          <button className="reset-button" onClick={resetGameData}>Reset Game Data</button>
        </div>
        <h1>Game Settings</h1>
        <h2>Teams</h2>
        {teams.length === 0 ? (
          <p style={{ textAlign: "center" }}>No teams have been added yet.</p>
        ) : (
          <div className="teams-container">
            {teams.map((team, index) => (
              <div key={index} className="team">
                {team.name}
              </div>
            ))}
          </div>
        )}
        <h3 style={{ textAlign: "center" }}>
          Team names cannot be changed once entered. Teams cannot be deleted once added. Please make sure you enter the correct data.
        </h3>
      </div>
    </div>
  );
}

export default Settings;
