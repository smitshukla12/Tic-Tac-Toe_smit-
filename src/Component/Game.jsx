import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../gameUtils';
import '../game.css'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(false);

  const currentSquares = history[stepNumber];
 
//   console.log("Current board:", currentSquares);

  const winnerInfo = calculateWinner(currentSquares);
//   console.log("winnerInfo",winnerInfo)
  const winner = winnerInfo ? winnerInfo.winner : null;
//   console.log("winner",winner);

  function handleClick(i) {
    // console.log("handleClick called -> index:", i);

    if (winner) {
    //   console.log("Click ignored, game already has a winner:", winner);
      return;
    }
    if (currentSquares[i]) {
    //   console.log("Click ignored, square already filled at index:", i);
      return;
    }

    const newHistory = history.slice(0, stepNumber + 1);
    
    const squares = currentSquares.slice();
   
    squares[i] = xIsNext ? 'X' : 'O';

    // console.log("Placing:", squares[i], "at index:", i); 

    setHistory([...newHistory, squares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(move) {
    console.log("Jumping to move:", move);
    setStepNumber(move);
    setXIsNext(move % 2 === 0);
    
  }

  function resetGame() {
    console.log("Resetting game");
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  }

  const moves = history.map((_, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) status = `Winner: ${winner}`;
  else if (!currentSquares.includes(null)) status = 'Draw';
  else status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  console.log("Status message:", status);

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentSquares}
          onClick={handleClick}
          winningLine={winnerInfo ? winnerInfo.line : []}
        />
      </div>

      <div className="game-info">
        <div className="status">{status}</div>
        <button onClick={resetGame} className="reset-btn">Reset</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
