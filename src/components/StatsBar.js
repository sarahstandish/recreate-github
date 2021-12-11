import React from "react";
import "./StatsBar.css";

const StatsBar = () => {
  return (
    <div className="statsbar">
      <div className="statbox">
        <p className="stat-number">65+ million</p>
        <p className="stat-item">Developers</p>
      </div>
      <div className="statbox">
        <p className="stat-number">3+ million</p>
        <p className="stat-item">Organizations</p>
      </div>
      <div className="statbox">
        <p className="stat-number">200+ million</p>
        <p className="stat-item">Repositories</p>
      </div>
      <div className="statbox">
        <p className="stat-number">72%</p>
        <p className="stat-item">Fortune 50</p>
      </div>
    </div>
  );
};

export default StatsBar;
