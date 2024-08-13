import React, { useState, useEffect } from 'react';

const items = [
  'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
  'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'
];

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function Game({ onScoreUpdate, onGameOver }) {
  const [gameItems, setGameItems] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);

  useEffect(() => {
    setGameItems(shuffleArray(items));
  }, []);

  const handleItemClick = (item) => {
    if (clickedItems.includes(item)) {
      onGameOver();
      setClickedItems([]);
    } else {
      const newClickedItems = [...clickedItems, item];
      setClickedItems(newClickedItems);
      onScoreUpdate(newClickedItems.length);
    }
    setGameItems(shuffleArray(items));
  };

  return (
    <div className="game-board">
      {gameItems.map((item, index) => (
        <div key={index} className="game-card" onClick={() => handleItemClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Game;