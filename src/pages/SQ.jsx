import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Ensure this points to your CSS file

function SQ() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f9",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "4em", fontWeight: "bold", color: "#0056d6", marginBottom: "20px" }}>Signal Quest</h1>

      <Link to="/home">
        <div
          style={{
            margin: "20px 0",
            width: "150px",
            height: "150px",
            backgroundColor: "#ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          {/* Replace this with the actual logo image path */}
          <img
            src="/logo.png"
            alt="Signal Quest Logo"
            style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "50%" }}
          />
        </div>
      </Link>

      <div style={{ fontSize: "1.5em", color: "#555", marginBottom: "30px" }}>
        Connect. Strategize. Dominate.
      </div>
    </div>
  );
}

export default SQ;
