const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Global Variables

function init_lobby() {

}

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

	socket.on('guess', (msg) => {
		console.log('previous guess', val);
		val = msg;
	});
});

server.listen(3000, () => {

	init_lobby();
	console.log('listening on *:3000');
});
