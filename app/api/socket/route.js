// // app/api/socket/route.js

// import { NextResponse } from 'next/server';
// import { Server } from 'socket.io';

// const ioHandler = (req, res) => {
//   if (!res.socket.server.io) {
//     console.log('*First use of Socket.io');
//     const io = new Server(res.socket.server);

//     res.socket.server.io = io;

//     io.on('connection', (socket) => {
//       socket.on('join', (roomId) => {
//         socket.join(roomId);

//         const room = io.sockets.adapter.rooms.get(roomId);
//         if (room.size === 1) {
//           socket.emit('startGame', 'X');
//         } else if (room.size === 2) {
//           io.to(roomId).emit('startGame', 'O');
//           io.to(roomId).emit('startGame', 'X');
//         } else {
//           socket.leave(roomId);
//         }
//       });
//       socket.on('move', ({ roomId, board }) => {
//         socket.to(roomId).emit('updateBoard', board);

//         // 勝敗の判定ロジックをここに追加
//       });
//     });
//   } else {
//     console.log('Socket.io already running');
//   }
//   return NextResponse.json({});
// };

// export const GET = ioHandler;
// export const POST = ioHandler;