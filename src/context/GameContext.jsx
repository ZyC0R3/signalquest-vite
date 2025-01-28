import React, { createContext, useContext, useReducer } from "react";

// Create the Context
const GameContext = createContext();

// Initial State
const initialState = {
  teams: [], // Array of teams and their data
  communityDeck: [], // Cards left in the community deck
  gameMasterCards: [
    { name: "Mass Service Outage", text: "Widespread outage affects everyone.", effect: "Each team must remove 1 network component from their existing networks." },
    { name: "All-Hands Upgrade", text: "Company-wide initiative boosts performance.", effect: "All teams earn +5 additional Signal Points for each completed set this week." },
    { name: "Priority Maintenance", text: "Preventative measures keep networks stable.", effect: "No negative Event Cards (Outage, Sabotage) can be played this week." },
    { name: "Peak Hour Surge", text: "High demand leads to bigger gains.", effect: "The first set each team completes this week scores double points." },
    { name: "Staff Re-Routing", text: "Shift changes complicate collaboration.", effect: "No trades can be made between teams this week." },
    { name: "Budget Boost", text: "Extra funding accelerates development.", effect: "Each team draws one extra card at the start of their first shift this week." },
    { name: "Emergency Maintenance", text: "System-wide downtime for repairs.", effect: "One day this week is a No-Play day—no team may draw or play cards." },
    { name: "Outsource Chaos", text: "External factors force a shift in priorities.", effect: "Each team must discard 1 random card from their hand at the beginning of each shift." },
    { name: "Power Surge", text: "Expanded capacity allows higher output.", effect: "Teams may exceed the standard weekly point cap by +10 this week." },
    { name: "Network Overload", text: "Traffic spike overwhelms resources.", effect: "All teams skip the draw step on their first turn this week." },
    { name: "Holiday Bonus", text: "Seasonal cheer provides an instant reward.", effect: "Each team immediately gains +10 Signal Points." },
    { name: "Training Week", text: "Focus on development over competition.", effect: "Sabotage cannot be played this week." },
    { name: "Limited Connectivity", text: "Bandwidth constraints limit progress.", effect: "Each team can only complete 1 set per turn this week." },
    { name: "Spectrum Shift", text: "New technology expands frequency range.", effect: "Each newly completed set is worth +5 extra Signal Points this week." },
    { name: "Signal Jamming", text: "Interference restricts standard upgrading methods.", effect: "Data Surge and Upgrade cannot be used this week (Super Upgrade remains allowed)." },
    { name: "Data Breach", text: "Security breach exposes vulnerabilities.", effect: "Each team must reveal their hand to all other teams at the start of each shift." },
  ], // Default Game Master cards
  activeGameMasterCard: null, // The active Game Master card
  currency: {}, // Currency for each team
  points: {}, // Points for each team
};

// Reducer to manage state updates
function gameReducer(state, action) {
  switch (action.type) {
    case "ADD_TEAM":
        if (state.teams.some((team) => team.name === action.payload.name)) {
          alert("Team with this name already exists!");
          return state;
        }
        return {
          ...state,
          teams: [...state.teams, action.payload],
        };
    case "UPDATE_TEAM":
      return {
        ...state,
        teams: state.teams.map((team) =>
          team.id === action.payload.id ? { ...team, ...action.payload } : team
        ),
      };
    case "SET_ACTIVE_GAME_MASTER_CARD":
      return {
        ...state,
        activeGameMasterCard: action.payload,
      };
    case "SET_GAME_MASTER_CARDS":
      return {
        ...state,
        gameMasterCards: action.payload,
      };
    case "RESET_COMMUNITY_DECK":
      return {
        ...state,
        communityDeck: action.payload,
      };
    case "ADD_CURRENCY":
      return {
        ...state,
        currency: {
          ...state.currency,
          [action.payload.teamId]:
            (state.currency[action.payload.teamId] || 0) +
            action.payload.amount,
        },
      };
    case "RESET_GAME_DATA":
      return {
        ...initialState,
        gameMasterCards: [...initialState.gameMasterCards], // Retain default Game Master cards
      };
    default:
      return state;
  }
}

// Provider Component
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

// Hook to use the GameContext
export function useGameContext() {
  return useContext(GameContext);
}
