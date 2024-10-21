import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Application</h1>
        <p>Your journey starts here. Please explore our platform.</p>
        <div className="home-buttons">
          <Link to="/login" className="home-button">
            Login
          </Link>
          <Link to="/dashboard" className="home-button">
            Dashboard
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
