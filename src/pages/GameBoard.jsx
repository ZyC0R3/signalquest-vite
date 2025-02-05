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

      <div className="container game-board-container">
        <h1>Game Board</h1>
        <div className="board-grid">
          <div className="board-zone zone"></div>
          <div className="hand-zone zone"></div>
          <div className="game-zone zone"></div>
          <div className="hand-zone-1 zone">
            <p>Hand 1</p>
          </div>
          <div className="hand-zone-2 zone">
            <p>Hand 2</p>
          </div>
          <div className="hand-zone-3 zone">
            <p>Hand 3</p>
          </div>
          <div className="hand-zone-4 zone">
            <p>Hand 4</p>
          </div>
          <div className="hand-zone-5 zone">
            <p>Hand 5</p>
          </div>
          <div className="playable-zone-1 zone">{renderCards("Playable")}
            <p>PZ1</p>
          </div>
          <div className="playable-zone-2 zone">{renderCards("Playable")}
            <p>PZ2</p>
          </div>
          <div className="playable-zone-3 zone">{renderCards("Playable")}
            <p>PZ3</p>
          </div>
          <div className="playable-zone-4 zone">{renderCards("Playable")}
            <p>PZ4</p>
          </div>
          <div className="enhancement-zone zone">{renderCards("Enhancement")}
            <p>Enhance</p>
          </div>
          <div className="component-zone-1 zone">{renderCards("Component")}
            <p>Set 1 Slot 1</p>
          </div>
          <div className="component-zone-2 zone">{renderCards("Component")}
            <p>Set 1 Slot 2</p>
          </div>
          <div className="component-zone-3 zone">{renderCards("Component")}
            <p>Set 1 Slot 3</p>
          </div>
          <div className="component-zone-4 zone">{renderCards("Component")}
            <p>Set 1 Slot 4</p>
          </div>
          <div className="component-zone-5 zone">{renderCards("Component")}
            <p>Set 2 Slot 1</p>
          </div>
          <div className="component-zone-6 zone">{renderCards("Component")}
            <p>Set 2 Slot 2</p>
          </div>
          <div className="component-zone-7 zone">{renderCards("Component")}
            <p>Set 2 Slot 3</p>
          </div>
          <div className="component-zone-8 zone">{renderCards("Component")}
            <p>Set 2 Slot 4</p>
          </div>
          <div className="component-zone-9 zone">{renderCards("Component")}
            <p>Set 3 Slot 1</p>
          </div>
          <div className="component-zone-10 zone">{renderCards("Component")}
            <p>Set 3 Slot 2</p>
          </div>
          <div className="component-zone-11 zone">{renderCards("Component")}
            <p>Set 3 Slot 3</p>
          </div>
          <div className="component-zone-12 zone">{renderCards("Component")}
            <p>Set 3 Slot 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
