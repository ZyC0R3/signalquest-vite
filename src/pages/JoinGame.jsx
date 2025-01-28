import React from "react";
import MenuBar from "../components/MenuBar";
import { useGameContext } from "../context/GameContext";
import "../styles.css";

function JoinGame() {
  const { state } = useGameContext();
  const { teams } = state;

  return (
    <div>
      <MenuBar />
      <button className="toggle-mode" id="toggle-mode-btn">
        <span className="toggle-mode-text">Light Mode</span>
      </button>

      <div className="container">
        <h1>Join Signal Quest</h1>
        {teams.length === 0 ? (
          <p style={{ textAlign: "center" }}>No teams have joined yet. Add teams in the Settings page.</p>
        ) : (
          <div className="teams-container">
            {teams.map((team, index) => (
              <div key={index} className="team">
                {team.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JoinGame;
