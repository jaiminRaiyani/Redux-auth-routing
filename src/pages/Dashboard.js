import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h3>Section 1</h3>
          <div className="dashboard-item">
            <p>User 1</p>
            <span className="item-value">Value 1</span>
          </div>
          <div className="dashboard-item">
            <p>User 2</p>
            <span className="item-value">Value 2</span>
          </div>
        </div>

        <div className="dashboard-section">
          <h3>Section 2</h3>
          <div className="dashboard-item">
            <p>Item 3</p>
            <span className="item-value">Value 3</span>
          </div>
        </div>

        <button>Take Action</button>
      </div>
    </div>
  );
};

export default Dashboard;
