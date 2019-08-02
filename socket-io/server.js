const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, './frontent')));
const server = http.createServer(app);

const io = socketio(server);
io.on('connection', (socket)=>{
  console.log('the connection found on '+socket.id);
  socket.emit('connected');
})
server.listen(3000, ()=>{
  console.log('webpage is running on http://localhost:3000');
})
