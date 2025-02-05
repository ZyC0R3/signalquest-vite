import React from "react";
import { Routes, Route } from "react-router-dom";
import SQ from "./pages/SQ";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import CardList from "./pages/CardList";
import JoinGame from "./pages/JoinGame";
import Settings from "./pages/Settings";
import GameMaster from "./pages/GameMaster";
import GameBoard from "./pages/GameBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SQ />} />
      <Route path="/home" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/card-list" element={<CardList />} />
      <Route path="/join" element={<JoinGame />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/game-master" element={<GameMaster />} />
      <Route path="/board" element={<GameBoard />} />
    </Routes>
  );
}

export default App;
