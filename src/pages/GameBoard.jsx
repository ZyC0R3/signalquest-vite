import React from "react";
import MenuBar from "../components/MenuBar";
import { useGameContext } from "../context/GameContext";
import "../styles/styles.css";

function GameBoard() {
  const { state } = useGameContext();
  const { teams } = state;

  const renderCards = (useType) => {
    return teams.flatMap((team) =>
      team.activeCards
        .filter((card) => card.use === useType)
        .map((card, index) => (
          <div key={index} className="card-slot">
            <div className="card-content">
              <h3>{card.name}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))
    );
  };

  return (
    <div>
      <MenuBar />
      <button className="toggle-mode" id="toggle-mode-btn">
        <span className="toggle-mode-text">Light Mode</span>
      </button>
      <div className="container game-board-container">
        <h1>Game Board</h1>
        <div className="board-grid">
        <div className="playable-zone-1 zone playable-zone">{renderCards("Playable")}</div>
          <div className="playable-zone-2 zone playable-zone">{renderCards("Playable")}</div>
          <div className="playable-zone-3 zone playable-zone">{renderCards("Playable")}</div>
          <div className="playable-zone-4 zone playable-zone">{renderCards("Playable")}</div>
          <div className="enhancement-zone zone">{renderCards("Enhancement")}</div>
          <div className="component-zone-1 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-2 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-3 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-4 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-5 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-6 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-7 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-8 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-9 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-10 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-11 zone component-zone">{renderCards("Component")}</div>
          <div className="component-zone-12 zone component-zone">{renderCards("Component")}</div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
