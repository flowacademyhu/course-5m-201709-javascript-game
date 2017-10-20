'use strict';

const hasiTasi = require('../lib/menu/inventory');

module.exports = function (position, gameIsRunning) {
  if (hasiTasi.inventory.activeItems[0] !== undefined && hasiTasi.inventory.activeItems[0].name === 'királylány') {
    console.log('Nyeréé! Ügyes vagy!');
    return false;
  } else {
    return true;
  }
};
