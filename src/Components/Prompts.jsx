import React from 'react';

function Prompts() {
  return (
    <div className="prompts">
      <div className="prompt-card">
        <h2>How to Play</h2>
        <p>Click on an item you haven't clicked before. Don't click the same item twice!</p>
      </div>
      <div className="prompt-card">
        <h2>Game Over</h2>
        <p>If you click an item twice, the game will restart. Try to beat your best score!</p>
      </div>
    </div>
  );
}

export default Prompts;