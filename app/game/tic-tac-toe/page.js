// app/(game)/tic-tac-toe/[roomId]/page.js

// 先ほどの TicTacToePage コンポーネントをこのファイルに移動し、roomId を動的に取得します。

'use client';
import { useEffect, useState } from 'react';
import Game from '../../components/Game';
// import io from 'socket.io-client';
// import styles from './tic-tac-toe.module.css';

// let socket;

export default function TicTacToePage() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(true);
  // const [roomId, setRoomId] = useState('');
  // const [playerSymbol, setPlayerSymbol] = useState('');
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   socketInitializer();
  // }, []);

  // const socketInitializer = async () => {
  //   await fetch('/api/socket'); // サーバー側の Socket.IO を初期化
  //   socket = io();

  //   socket.on('connect', () => {
  //     console.log('connected');
  //     const path = window.location.pathname;
  //     const room = path.split('/').pop();
  //     setRoomId(room);
  //     socket.emit('join', room);
  //   });

  //   socket.on('startGame', (symbol) => {
  //     setPlayerSymbol(symbol);
  //     setMessage('ゲーム開始！ あなたは ' + symbol + ' です。');
  //   });

  //   socket.on('updateBoard', (updatedBoard) => {
  //     setBoard(updatedBoard);
  //     setIsXNext(!isXNext);
  //   });

  //   socket.on('gameEnd', (result) => {
  //     setMessage(result);
  //   });
  // };


  // const handleClick = (index) => {
  //   if (board[index] || calculateWinner(board) || message !== '') return;

  //   // if ((isXNext && playerSymbol !== 'X') || (!isXNext && playerSymbol !== 'O')) return;

  //   const newBoard = board.slice();
  //   newBoard[index] = isXNext ? 'X' : 'O';
  //   setBoard(newBoard);
  //   setIsXNext(!isXNext);

  //   const winner = calculateWinner(newBoard);
  //   if (winner) {
  //     setMessage('勝者: ' + winner);
  //   } else if (newBoard.every(cell => cell !== null)) {
  //     setMessage('引き分け！');
  //   }



  //   // socket.emit('move', { roomId, board: newBoard });
  // };

  return (
    <div>
      <h1>三目並べ</h1>
      {/* <p>{message}</p> */}
      <div>
        <Game />   
      </div>
    </div>
  );
}

