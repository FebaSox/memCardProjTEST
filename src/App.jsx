import React, { useState } from 'react';
import Game from './Components/Game';
import Header from './Components/Header';
import Prompts from './Components/Prompts';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScoreUpdate = (newScore) => {
    setScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  };

  const handleGameOver = () => {
    setScore(0);
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <Prompts />
      <Game onScoreUpdate={handleScoreUpdate} onGameOver={handleGameOver} />
    </div>
  );
}

export default App;