'use strict'
const serverInfo = require('./credentials').server;
const express = require('express');
const path = require('path');
const makeStockList = require('./server/helperMethods').makeStockList;
let app = express();

let stockList = makeStockList();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/stockList', (req, res) => {
  res.send(stockList);
});

app.post('/stockList', (req, res) => {
  stockList = makeStockList();
  console.log('Mehtod updated the stock list');
});

app.listen(serverInfo.port, serverInfo.IP, () => {
  console.log('Server listening on: ' + serverInfo.IP + ":" + serverInfo.port);
});
