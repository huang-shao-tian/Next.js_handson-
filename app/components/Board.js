// app/components/Board.js
'use client';

import { useState } from 'react';
import Square from './Square';

export default function Board({isXNext, squares, onPlay}) {
  // const [squares, setSquares] = useState(squares);
  // const [isXNext, setIsXNext] = useState(isXNext);

  function calculateWinner(squares) {
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
        return squares[a];
      }
    } 
    return null;
    }
    

  // マス目がクリックされたときの処理
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  // マス目をレンダリングする関数
  const renderSquare = (index) => {
    return (
      <Square
        value={squares[index]}
        onClick={() => handleClick(index)}
      />
    );
  };

  return (
    <>
    <div className="status">{status}</div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 60px)',
        gap: '5px',
      }}
    >
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <div key={index}>{renderSquare(index)}</div>
        ))}
    </div>
    </>
  );
}


