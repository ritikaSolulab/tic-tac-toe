import tttSocket from './tttSocket.js';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
	serveClient: false,
	cors: {
		origin: '*',
	},
});

// tic tac toe socket
tttSocket(io);

const PORT = process.argv[2];
server.listen(PORT, () => {
	console.log(`node server.js ${PORT}`);
});
