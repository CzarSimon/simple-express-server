'use strict'

const randomUrgency = () => {
  return (Math.random() * 1.5).toFixed(2);
}

const makeStockList = () => {
  let newList = [
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
  return newList;
}

module.exports = {
  makeStockList: makeStockList,
  randomUrgency: randomUrgency
};
