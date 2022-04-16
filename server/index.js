const express = require("express");
const socketio = require("socket.io");
const http = require('http')


const Port = process.env.PORT || 5000

const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('we have  a new connection to chatBox!!!')

  socket.on('disconnect', () => {
    console.log('user has left chatBox')
  })
});

app.use(router);

server.listen(Port, () => console.log(`chatBox Server started on port ${Port}`));
