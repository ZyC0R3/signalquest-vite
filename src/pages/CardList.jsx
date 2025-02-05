import React from "react";
import MenuBar from "../components/MenuBar";
import "../styles/styles.css";
import { useGameContext } from "../context/GameContext";
import { MdCable } from "react-icons/md";
import { BsRouter } from "react-icons/bs";
import { LuRadioTower, LuShield } from "react-icons/lu";
import { FaCarBattery, FaDollarSign } from "react-icons/fa6";
import { SlTarget } from "react-icons/sl";
import { GiUpgrade, GiAutoRepair, GiSkullShield, GiSkullInJar, GiPirateSkull, GiChewedSkull, GiCrownedSkull } from "react-icons/gi";

const cardData = {
  networkCards: [
    { name: "Fiber Optic Cable", count: 22, text: "A critical component for high-speed connectivity.", effect: "Needed to complete a network set." , icon: <MdCable /> , use: `Component`},
    { name: "Router", count: 22, text: "Routes data efficiently within your network.", effect: "Needed to complete a network set." , icon: <BsRouter /> , use: `Component`},
    { name: "Tower", count: 22, text: "Extends network coverage over vast areas.", effect: "Needed to complete a network set." , icon: <LuRadioTower /> , use: `Component`},
    { name: "Power Unit", count: 22, text: "Maintains network functionality during high demand.", effect: "Needed to complete a network set." , icon: <FaCarBattery /> , use: `Component`},
  ],
  eventCards: [
    { name: "Outage", count: 6, text: "Cause a network outage on another team's component.", effect: "Temporarily disables one network component on a target team.", cost: { EZL: 1, VAT: 1 } , icon: <SlTarget /> , use: `Instant`},
    { name: "Upgrade", count: 6, text: "Optimize a set for higher output.", effect: "Draw 2 cards from the community pool, keep 1, discard the other.", cost: { EZL: 2, VAT: 1 } , icon: <GiUpgrade /> , use: `Instant`},
    { name: "Repair Kit", count: 6, text: "Restore your network to full operation.", effect: "Removes one Outage effect from your team.", cost: { EZL: 1, VAT: 1 } , icon: <GiAutoRepair /> , use: `Instant`},
    { name: "Sabotage", count: 6, text: "Steal a random card from an opponent's hand or network.", effect: "Remove one random card from another team (either from their hand or an unbanked set).", cost: { EZL: 2, VAT: 1 } ,icon: <SlTarget /> , use: `Instant`},
    { name: "Network Disruption", count: 2, text: "Cause chaos in another team's network.", effect: "Disable all played network components on a target team for 1 shift.", cost: { EZL: 5, VAT: 4 } , icon: <SlTarget /> , use: `Instant`},
  ],
  specialCards: [
    { name: "Super Upgrade", count: 5, text: "Push your next set to the limit.", effect: "Triple the Signal Points gained from your next completed set.", cost: { EZL: 3, VAT: 2 } , icon: <FaDollarSign /> , use: `Playable`},
    { name: "Firewall", count: 3, text: "Shield your network from sabotage.", effect: "Protects your network from negative effects for 1 day.", cost: { EZL: 2, VAT: 1 } , icon: <LuShield /> , use: `Playable`},
    { name: "Signal Amplifier", count: 2, text: "This card can be stolen.", effect: "Permanently increases the value of all future sets by +5 points. This card can be Stolen", cost: { EZL: 3, VAT: 2 } , icon: <GiUpgrade /> , use: `Playable`},
    { name: "Network Expansion", count: 3, text: "Increase your active network capacity.", effect: "Allows up to 3 completed networks at once. Discard when banking a set.", cost: { EZL: 2, VAT: 1 } , icon: <GiUpgrade />  , use: `Enhancement`},
    { name: "Data Surge", count: 2, text: "Overload your network for a big gain.", effect: "Complete 2 sets in one go and earn an extra 50 bonus points.", cost: { EZL: 3, VAT: 2 } , icon: <FaDollarSign />, use: `Playable`},
    { name: "Data Backup", count: 3, text: "Protect your network from data loss.", effect: "If your network is sabotaged you can redirect it back to your opponent", cost: { EZL: 2, VAT: 1 } , icon: <LuShield /> , use: `Playable`},
    { name: "Network Overdrive", count: 2, text: "Temporary boost in bandwidth.", effect: "If you complete a set this turn, you may bank it at no cost.", cost: { EZL: 2, VAT: 1 } , icon: <FaDollarSign /> , use: `Playable`},
  ],
  enhancmentCards: [

  ],
  gameMasterCards: [
    { name: "Mass Service Outage", text: "Widespread outage affects everyone.", effect: "Each team must remove 1 network component from their existing networks." , icon: <GiPirateSkull />},
    { name: "All-Hands Upgrade", text: "Company-wide initiative boosts performance.", effect: "All teams earn +5 additional Signal Points for each completed set this week." , icon: <GiCrownedSkull />},
    { name: "Priority Maintenance", text: "Preventative measures keep networks stable.", effect: "No negative Event Cards (Outage, Sabotage) can be played this week." , icon: <GiSkullInJar />},
    { name: "Peak Hour Surge", text: "High demand leads to bigger gains.", effect: "The first set each team completes this week scores double points." , icon: <GiCrownedSkull />},
    { name: "Staff Re-Routing", text: "Shift changes complicate collaboration.", effect: "No trades can be made between teams this week." , icon: <GiSkullInJar />},
    { name: "Budget Boost", text: "Extra funding accelerates development.", effect: "Each team draws one extra card at the start of their first shift this week." , icon: <GiCrownedSkull />},
    { name: "Emergency Maintenance", text: "System-wide downtime for repairs.", effect: "One day this week is a No-Play day—no team may draw or play cards." , icon: <GiSkullInJar />},
    { name: "Outsource Chaos", text: "External factors force a shift in priorities.", effect: "Each team must discard 1 random card from their hand at the beginning of each shift.", icon: <GiChewedSkull /> },
    { name: "Network Overload", text: "Traffic spike overwhelms resources.", effect: "All teams skip the draw step on their first shift this week." , icon: <GiSkullInJar />},
    { name: "Holiday Bonus", text: "Seasonal cheer provides an instant reward.", effect: "Each team immediately gains +10 Signal Points." , icon: <GiCrownedSkull />},
    { name: "Training Week", text: "Focus on development over competition.", effect: "Sabotage cannot be played this week." , icon: <GiSkullShield /> },
    { name: "Limited Connectivity", text: "Bandwidth constraints limit progress.", effect: "Each team can only complete 1 set per shift this week." , icon: <GiChewedSkull />},
    { name: "Spectrum Shift", text: "New technology expands frequency range.", effect: "Each newly completed set is worth +5 extra Signal Points this week." , icon: <GiCrownedSkull />},
    { name: "Signal Jamming", text: "Interference restricts standard upgrading methods.", effect: "Data Surge and Upgrade cannot be used this week (Super Upgrade remains allowed)." , icon: <GiChewedSkull />},
    { name: "Data Breach", text: "Security breach exposes vulnerabilities.", effect: "Each team must reveal their hand to all other teams at the start of each shift." , icon: <GiPirateSkull />},
  ],
};

function CardList() {
  const { state } = useGameContext();
  const renderCards = (cards) => {
    return cards.map((card, index) => (
      <div key={index} className="card">
        <div className="card-count">x{card.count || 1}</div>
        <div className="card-use">{card.use || ""}</div>
        <div className="card-icon">{card.icon || ""}</div>
        <h3>{card.name}</h3>
        <p><strong>Card Text:</strong> {card.text}</p>
        <p><strong>Effect:</strong> {card.effect}</p>
        {card.cost && (
          <div className="cost-container">
            <div className="cost-section">
              <p><strong>EZL</strong></p>
              <p>{card.cost.EZL}</p>
            </div>
            <div className="cost-section">
              <p><strong>VAT</strong></p>
              <p>{card.cost.VAT}</p>
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div>
      <MenuBar />
      <div className="container card-list-container">
        <h1>Card List</h1>

        <div className="card-section network-cards">
          <h2>Network Cards x 88</h2>
          <div className="card-grid">{renderCards(cardData.networkCards)}</div>
        </div>

        <div className="card-section event-cards">
          <h2>Event Cards x 26</h2>
          <div className="card-grid">{renderCards(cardData.eventCards)}</div>
        </div>

        <div className="card-section special-cards">
          <h2>Special Cards x 20</h2>
          <div className="card-grid">{renderCards(cardData.specialCards)}</div>
        </div>

        <div className="card-section game-master-cards">
          <h2>Game Master Cards x 15</h2>
          <div className="card-grid">{renderCards(cardData.gameMasterCards)}</div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
