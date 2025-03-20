import './App.css';
import React, { useState } from 'react';

function App() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
  
    const handleClick = (i) => {
      if (squares[i] || winner) return; // Ignore if square is filled or there's a winner
  
      const newSquares = squares.slice();
      newSquares[i] = xIsNext ? 'X' : 'O';
      setSquares(newSquares);
      setXIsNext(!xIsNext);
  
      const calculatedWinner = calculateWinner(newSquares);
      if (calculatedWinner) {
        setWinner(calculatedWinner);
      }
    };
  
    const renderSquare = (i) => {
      return <button className="square" onClick={() => handleClick(i)}>{squares[i]}</button>;
    };
  
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a]; // Return 'X' or 'O' if there's a winner
        }
      }
      return null;
    };
  
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
    return (
      <div className="game">
        <div className="status">{status}</div>
        <div className="board">
          {Array(9)
            .fill(null)
            .map((_, i) => renderSquare(i))}
        </div>
      </div>
    );
  }
  
  export default App;