'use strict'
const credentials = require('./credentials');
const express = require('express');
const path = require('path');
let app = express();

const localPort = 3000;
let port = process.env.EXPRESS_PORT || localPort;
let ipAddress = (port === localPort) ? credentials.server.local : credentials.server.prodIP

let stockList;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/stockList', (req, res) => {
  res.send(makeStockList());
});

app.post('/stockList', (req, res) => {
  console.log('This method should update the stockList');
});

app.listen(port, ipAddress, () => {
  console.log('Server listening on: ' + ipAddress + ":" + port);
});

const makeStockList = () => {
  let stockList = [
    {name: 'Twitter Inc.', urgency: randomUrgency() },
    {name: 'Amazon.com', urgency: randomUrgency() },
    {name: 'Apple', urgency: randomUrgency() },
    {name: 'LinkedIn', urgency: randomUrgency() },
    {name: 'Facebook', urgency: randomUrgency() },
    {name: 'Alphabet Inc.', urgency: randomUrgency() },
    {name: 'Intel Corp.', urgency: randomUrgency() },
    {name: 'Nike Inc.', urgency: randomUrgency() },
    {name: 'Tesla Corp.', urgency: randomUrgency() },
    {name: 'Accenture', urgency: randomUrgency() }
  ];
  return stockList
}

const randomUrgency = () => {
  return (Math.random() * 1.5).toFixed(2);
}
