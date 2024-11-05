const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client-side')));

io.on('connection', (socket) => {
    console.log('User Connected');
    socket.emit('message', 'Hello from the server!');

    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
});


io.on('connection', (socket) => {
    socket.on('chat_message', (msg) => {
      console.log('Message Received: ' + msg);
    });
  });



const HOST = '192.168.1.31'
const PORT = 3000;


server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

