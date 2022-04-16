const express = require("express");
const socketio = require("socket.io");
const http = require('http')


const Port = process.env.PORT || 5000

const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

server.listen(Port, () => console.log(`chatBox Server started on port ${Port}`));
 