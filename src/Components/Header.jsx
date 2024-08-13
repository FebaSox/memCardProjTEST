import React from 'react';

function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Memory Game</h1>
      <div className="scoreboard">
        <p>Current Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}

export default Header;