import { useState } from 'react';
import './App.css';
import { guess, startGame, restartGame } from './axios';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');

  const start = async () => {
    const response = await startGame();
    console.log(response);
    setHasStarted(true);
  }

  const handleGuess = async () => {
    const response = await guess(number);
    if (response === 'Equal') setHasWon(true);
    else if (response === 'Not legal') {
      setStatus(number.toString() + ' is not a valid number (1 - 100)');
      setNumber('');
    }
    else {
      setStatus(response)
      setNumber('');
    }
  }

  const restart = async () => {
    const response = await restartGame();
    console.log(response);
    setHasStarted(true);
    setHasWon(false);
    setNumber('');
    setStatus('');
  }

  const startMenu = 
  <div>
    <button onClick={start}
    >start game</button>
  </div>

  const gameMode = 
  <>
    <p>Guess a number between 1 to 100</p>
    <input value={number}  onChange={(e) => setNumber(e.target.value)}
    ></input>
    <button
      onClick={handleGuess}
      disabled={!number}
    >guess!</button>
    <p>{status}</p>
  </>

  const winningMode = 
  <>
    <p>you won! the number was {number}.</p>
    <button onClick={restart}
    >restart</button>
  </>

  const game = 
  <div>
    {hasWon ? winningMode : gameMode}
  </div>

  return <div className="App">
    {hasStarted? game : startMenu}
  </div>
}

export default App;