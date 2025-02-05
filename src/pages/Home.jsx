import React from "react";
import MenuBar from "../components/MenuBar";
import { useGameContext } from "../context/GameContext";
import "../styles/styles.css";

function Home() {
  const { state } = useGameContext();
  const { teams } = state;

  // Clone and sort teams by points in descending order
  const sortedTeams = [...teams].sort((a, b) => b.points - a.points);

  return (
    <div>
      <MenuBar />
      <div className="container">
        <h1>Welcome to Signal Quest</h1>
        <p>
          <strong>Connect. Strategize. Dominate.</strong> A competitive team-based strategy game where
          you build, protect, and expand your network while sabotaging your rivals to achieve ultimate
          dominance.
        </p>
        <h2>Leaderboard</h2>
        <div className="leaderboard-container">
          {sortedTeams.map((team, index) => (
            <div
              key={index}
              className="leaderboard-item"
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <span className="team-name" style={{ textAlign: "left", fontWeight: "bold" }}>{team.name}</span>
              <span className="team-score" style={{ textAlign: "right", color: "#0056d6" }}>{team.points} Points</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;