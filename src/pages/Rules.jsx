import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import MenuBar from "../components/MenuBar";
import "../styles/styles.css";

function Rules() {
  return (
    <div>
      <MenuBar />
      <button className="toggle-mode" id="toggle-mode-btn">
        <span className="toggle-mode-text">Light Mode</span>
      </button>
      <div className="container">
        <h1>Signal Quest Rules</h1>

        <h2>Objective</h2>
        <p>Your mission is to accumulate more <strong>Signal Points</strong> than any other team. Key ways to earn points include:</p>
        <ul>
          <li>Completing Network Sets (each set is 1 Fiber Optic Cable, 1 Router, 1 Tower, 1 Power Unit) for 10 points.</li>
          <li>Banking completed sets to secure points from sabotage.</li>
          <li>Using Event and Special cards to gain advantages or sabotage your enemy.</li>
          <li>The team with the highest total (banked) at the end of the final week becomes the Signal Quest Champion.</li>
        </ul>

        <h2>Game Components</h2>
        <Link to="/card-list" className="view-cards-button">View Cards</Link> {/* Use Link instead of <a> */}
        <ul>
          <li>134-Card Main Deck</li>
          <ul>
            <li>88 Network Cards (Fiber Optic Cable, Router, Tower, Power Unit)</li>
            <li>26 Event Cards (Outage, Upgrade, Repair Kit, etc.)</li>
            <li>20 Special Cards (Super Upgrade, Firewall, etc.)</li>
          </ul>
          <li>15 Game Master Cards (one randomly played each week)</li>
          <li>Signal Point Tracker (leaderboard)</li>
          <li>Currency: EZL (EZ Leads) and VAT (Value Add Transfers)</li>
          <li>Bank: A place to store protected points.</li>
        </ul>

        <h2>Turn Structure</h2>
        <p>Each team, at the start of their shift, draws 1 free card from the Community Deck. Teams can also:</p>
        <ul>
          <li>Play cards at any time except during the last hour of their shift.</li>
          <li>Draw additional cards for 1 EZL or 1 VAT each.</li>
          <li>Hold a maximum of 5 cards in hand. Excess cards must be discarded.</li>
          <li>End the turn by ensuring no cards are left unplayed after the shift.</li>
        </ul>

        <h2>Building Networks</h2>
        <p>A Complete Network Set requires 1 Fiber Optic Cable + 1 Router + 1 Tower + 1 Power Unit = <strong>10 Points</strong>.</p>
        <ul>
          <li>Each team may keep up to 2 completed networks on the board.</li>
          <li>Network Expansion allows up to 3 temporarily.</li>
          <li>To free up space, teams can bank a set or remove it.</li>
        </ul>

        <h2>Banking Mechanic</h2>
        <p>Teams can bank completed sets to secure their points. Banking costs 1 EZL or 1 VAT and allows teams to:</p>
        <ul>
          <li>Protect their points from sabotage.</li>
          <li>Return the 4 Network Cards to the deck.</li>
          <li>Gain 10 banked points, which count toward the final score.</li>
          <li>Draw 1 bonus card as a reward.</li>
        </ul>

        <h2>Event and Special Cards</h2>
        <ul>
          <li><strong>Event Cards:</strong> These include Outage, Upgrade, Repair Kit, and more. Use these to hinder opponents or boost your progress.</li>
          <li><strong>Special Cards:</strong> Rare and powerful cards such as Super Upgrade, Firewall, and Signal Amplifier can dramatically shift the game’s momentum.</li>
        </ul>

        <h2>Game Master Cards</h2>
        <p>Each week, the Game Master reveals one card affecting all teams. These can include:</p>
        <ul>
          <li>Restricting negative events.</li>
          <li>Granting bonus points per set.</li>
          <li>Limiting trades.</li>
        </ul>

        <h2>Weekly Challenges</h2>
        <ul>
          <li><strong>Network Rush:</strong> First team to build 3 sets in a week gets +30 points.</li>
          <li><strong>Event Mastery:</strong> Play 3 Event Cards in a week for +25 points.</li>
          <li><strong>Outage Management:</strong> Repair 3 Outages for +20 points.</li>
          <li><strong>Collaboration Kings:</strong> Most trades in a week earns +15 points.</li>
        </ul>

        <h2>Winning</h2>
        <p>The game runs for 4–6 weeks, with the final week doubling all points earned. The team with the highest total (banked + unbanked) at the end of the game is crowned the Signal Quest Champion.</p>
      </div>
    </div>
  );
}

export default Rules;
