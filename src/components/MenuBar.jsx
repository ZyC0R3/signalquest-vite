import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { validatePassword } from "../utils/passwordUtils";
import "../styles/styles.css";

function MenuBar({ className = "" }) {
  const location = useLocation();
  const navigate = useNavigate();

  const validatePasswordSettings = (event) => {
    event.preventDefault();
    const password = prompt("Enter the Settings password:");
    validatePassword(password, "/settings", navigate);
  };

  const validatePasswordGM = (event) => {
    event.preventDefault();
    const password = prompt("Enter the Game Master password:");
    validatePassword(password, "/game-master", navigate);
  };

  return (
    <div className={`menu-bar-container ${className}`}>
      <div className="menu-bar">
        <div className="menu-left">
          {location.pathname !== "/home" && <Link to="/home">Home</Link>}
          {location.pathname !== "/join" && <Link to="/join">Join Game</Link>}
          {location.pathname !== "/rules" && <Link to="/rules">Rules</Link>}
          {location.pathname !== "/card-list" && <Link to="/card-list">View Game</Link>}
        </div>
        <div className="menu-right">
          {location.pathname !== "/game-master" && (
            <a href="#" onClick={validatePasswordGM}>
              Game Master
            </a>
          )}
          {location.pathname !== "/settings" && (
            <a href="#" onClick={validatePasswordSettings}>
              Settings
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
