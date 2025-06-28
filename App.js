import React, { useState } from 'react';
import './App.css'; // ✅ Make sure App.css exists in /src
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [level, setLevel] = useState(1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [randomNumber, setRandomNumber] = useState(generateNumber(1));

  function generateNumber(level) {
    return Math.floor(Math.random() * (level * 10)) + 1;
  }

  function handleGuess() {
    const num = parseInt(guess);
    if (isNaN(num)) {
      setMessage('⚠️ Please enter a valid number.');
      return;
    }

    setAttempts(attempts + 1);

    if (num === randomNumber) {
      setMessage(`✅ Correct! You guessed it in ${attempts + 1} tries.`);
    } else if (num < randomNumber) {
      setMessage('🔽 Too low! Try again.');
    } else {
      setMessage('🔼 Too high! Try again.');
    }
  }

  function startNewGame() {
    const nextLevel = level + 1;
    setLevel(nextLevel);
    setGuess('');
    setMessage('');
    setAttempts(0);
    setRandomNumber(generateNumber(nextLevel));
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">🎯 Guess the Number Game</h1>
      <p>📦 Level: {level}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="form-control mb-3"
        placeholder={`Enter a number between 1 and ${level * 10}`}
      />
      <button className="btn btn-primary me-2" onClick={handleGuess}>Guess</button>
      <button className="btn btn-warning" onClick={startNewGame}>Next Level 🔁</button>
      <p className="mt-4">💬 {message}</p>
      <p>🧮 Attempts: {attempts}</p>
    </div>
  );
}

export default App;
