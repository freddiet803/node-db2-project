const express = require('express');

const carRouter = require('./routers/carRouter');

const server = express();

server.use(express.json());
server.use('/cars', carRouter);

server.get('/', (req, res) => {
  res.send('API for Cars UP and RUNNING');
});

module.exports = server;
