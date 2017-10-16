'use strict';

module.exports = function (position, gameIsRunning) {
  if (position[0] === 5 && position[1] === 4) {
    console.log('Nyeréé! Ügyes vagy!');
    return false;
  } else {
    return true;
  }
};
