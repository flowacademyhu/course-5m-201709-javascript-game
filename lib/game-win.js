'use strict';
const round = require('../lib/round');

module.exports = function (position, gameIsRunning) {
  if (position[0] === 5 && position[1] === 4) {
    console.log('Nyeréé! Ügyes vagy!');
    console.log('A lépéseid száma: ' + round.counter());
    return false;
  } else {
    return true;
  }
};
