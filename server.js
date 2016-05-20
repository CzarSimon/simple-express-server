'use strict'
const serverInfo = require('./credentials').server;
const express = require('express');
const path = require('path');
const makeStockList = require('./server/helperMethods').makeStockList;
const getDate = require('./server/helperMethods').getDate;
let app = express();

let stockList = makeStockList();
let lastUpdated = getDate();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/stockList', (req, res) => {
  let payload = {list: stockList, date: lastUpdated};
  res.send(payload);
});

app.post('/stockList', (req, res) => {
  stockList = makeStockList();
  lastUpdated = getDate();
  console.log('Mehtod updated the stock list');
});

app.listen(serverInfo.port, serverInfo.IP, () => {
  console.log('Server listening on: ' + serverInfo.IP + ":" + serverInfo.port);
});
