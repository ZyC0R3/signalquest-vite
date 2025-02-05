import React from "react";
import MenuBar from "../components/MenuBar";
import { useGameContext } from "../context/GameContext";
import "../styles/styles.css"; // Import global styles
import "../styles/GameMaster.css"; // Import GameMaster-specific styles

function GameMaster() {
  const { state, dispatch } = useGameContext();
  const { activeGameMasterCard, gameMasterCards } = state;

  const activateCard = (card) => {
    if (activeGameMasterCard) {
      dispatch({ type: "SET_GAME_MASTER_CARDS", payload: [...gameMasterCards, activeGameMasterCard] });
    }
    dispatch({ type: "SET_ACTIVE_GAME_MASTER_CARD", payload: card });
    dispatch({
      type: "SET_GAME_MASTER_CARDS",
      payload: gameMasterCards.filter((c) => c.name !== card.name),
    });
  };

  const removeActiveCard = () => {
    if (window.confirm("Are you sure you want to remove the active card?")) {
      if (activeGameMasterCard) {
        dispatch({
          type: "SET_GAME_MASTER_CARDS",
          payload: [...gameMasterCards, activeGameMasterCard],
        });
        dispatch({ type: "SET_ACTIVE_GAME_MASTER_CARD", payload: null });
      } else {
        alert("No active card to remove.");
      }
    }
  };

  return (
    <div>
      <MenuBar className="menu-bar-gm" />

      <div className="container game-master-container" style={{ maxWidth: "1200px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1>Game Master</h1>
          <button
            className="reset-button"
            onClick={removeActiveCard}
            style={{ marginLeft: "20px", padding: "10px 20px", backgroundColor: "#990000", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Remove Active Card
          </button>
        </div>

        <div className="section" id="active-card">
          <h2>Active Game Master Card</h2>
          {activeGameMasterCard ? (
            <div className="card card-gm">
              <h3>{activeGameMasterCard.name}</h3>
              <p><strong>Effect:</strong> {activeGameMasterCard.effect}</p>
            </div>
          ) : (
            <p>No card is currently active. Please select a card from the list below.</p>
          )}
        </div>

        <div className="section" id="available-cards">
          <h2>Available Cards</h2>
          {gameMasterCards.length > 0 ? (
            <div className="game-master-cards-grid">
              {gameMasterCards.map((card, index) => (
                <div key={index} className="card" onClick={() => activateCard(card)}>
                  <h3>{card.name}</h3>
                  <p><strong>Effect:</strong> {card.effect}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>All cards have been activated.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameMaster;
