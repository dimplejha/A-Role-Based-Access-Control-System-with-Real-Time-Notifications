// sockets/notificationSocket.js
const socketIo = require('socket.io');

const io = socketIo();

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

module.exports = io;
