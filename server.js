'use strict'
const credentials = require('./credentials');
const express = require('express');
const path = require('path');
const makeStockList = require('./server/helperMethods').makeStockList;
let app = express();

const localPort = 3000;
let port = process.env.EXPRESS_PORT || localPort;
let ipAddress = (port === localPort) ? credentials.server.local : credentials.server.prodIP

let stockList = makeStockList();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/stockList', (req, res) => {
  res.send(stockList);
});

app.post('/stockList', (req, res) => {
  stockList = makeStockList();
  console.log('Mehtod updated the stock list');
});

app.listen(port, ipAddress, () => {
  console.log('Server listening on: ' + ipAddress + ":" + port);
});
