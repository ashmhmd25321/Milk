import React, { useState, useEffect } from 'react';
import './Consumption.css';
import Navbar from '../Navbar';
import Graph from './Graph';
import Decision from './Decision';
import Decision2 from './Decision2'; // Import the Decision component

export default function Consumption() {
  const [showGraph, setShowGraph] = useState(true); // Set showGraph to true initially
  const [showDecision, setShowDecision] = useState(false);
  const [showDecision2, setShowDecision2] = useState(false); 

  useEffect(() => {
    // Code to handle initial graph display or any other side effects
  }, []);

  const handlePredictions = () => {
    // Code to handle predictions button click
  };

  const handleBusinessDecision = () => {
    setShowDecision(true);
    setShowDecision2(false);
  };

  const handleBusinessDecision2 = () => {
    setShowDecision(false);
    setShowDecision2(true); 
  };

  const handleRates = () => {
    setShowGraph(true); // Show the graph
    setShowDecision(false);
    setShowDecision2(false); 
  };

  return (
    <div>
      <Navbar />
      <div className="menu-bar">
        <div className="menu-item">
          <button className="menu-button" onClick={handlePredictions}>
            Predictions
          </button>
        </div>
        <div className="menu-item">
          <button className="menu-button" onClick={handleBusinessDecision}>
            Business Decision(Consumption)
          </button>
        </div>
        <div className="menu-item">
          <button className="menu-button" onClick={handleBusinessDecision2}>
            Business Decision(Supply)
          </button>
        </div>
        <div className="menu-item">
          <button className="menu-button" onClick={handleRates}>
            Dashboard
          </button>
        </div>
      </div>
      <div className="content">
        {showGraph && !showDecision && !showDecision2 && <Graph />}
        {showDecision && !showDecision2 && <Decision />}
        {showDecision2 && <Decision2 />}
      </div>
    </div>
  );
}