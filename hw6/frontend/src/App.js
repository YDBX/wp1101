import { useState } from 'react';
import './App.css';
import { guess, startGame, restartGame } from './axios';

function App() {
  const [playerMsgs, setPlayerMsgs] = useState([]);
  const [machineMsgs, setMachineMsgs] = useState([]);
  
  const [hasStarted, setHasStarted] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [machinehHasWon, setMachineHasWon] = useState(false);
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');

  const start = async () => {
    const response = await startGame();
    console.log(response);
    setHasStarted(true);
  }

  const handleGuess = async () => {
    const {player_msg, machine_msg} = await guess(number);
    if (player_msg === 'Not legal') {
      setStatus(number.toString() + ' is not valid');
      setNumber('');
    }
    else {
      setPlayerMsgs([...playerMsgs, number, player_msg]);
      setMachineMsgs([...machineMsgs, machine_msg.machine_guess_number, machine_msg.machine_guess_status]);
      setNumber('');
    }
    if (player_msg === '4A0B') {
      setHasWon(true);
      setStatus('You win!');
      setNumber('');
    }
    else if (machine_msg.machine_guess_status === '4A0B') {
      setMachineHasWon(true);
      setStatus('You lose!');
      setNumber('');
    }
    
  }

  const restart = async () => {
    const response = await restartGame();
    console.log(response);
    setHasStarted(true);
    setHasWon(false);
    setMachineHasWon(false);
    setPlayerMsgs([]);
    setMachineMsgs([]);
    setNumber('');
    setStatus('');
  }

  const startMenu = 
  <div>
    <h1>1A1B</h1>
    <button onClick={start}
    >start game</button>
  </div>

  const gameMode = 
  <>
    <p>Guess a four-digit number (every digit is from 0 to 9)</p>
    <input value={number}  onChange={(e) => setNumber(e.target.value)}
    ></input>
    <button
      onClick={handleGuess}
      disabled={!number}
    >guess!</button>
    <div className="player_guess">{playerMsgs.map((value) => 
      <p>{value}</p>
    )}</div>
    <div className="machine_guess">{machineMsgs.map((value) => 
      <p>{value}</p>
    )}</div>
    <div>
      <p>{status}</p>
    </div>
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