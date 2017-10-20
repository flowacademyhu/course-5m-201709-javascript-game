'use strict';

const movement = require('./actions/movement');
const place = require('./actions/place');
const rest = require('./actions/rest');
const talk = require('./actions/talk');
const attack = require('./actions/attack');
const context = require('../data/context');
const pickUp = require('./actions/pick-up');
const itemUsage = require('./actions/item-usage');
const inventorySummary = require('./actions/inventory-summary');
const help = require('./actions/help');
const pisti = require('./actions/pisti');

module.exports = function (splittedText, matrix) {
  switch (splittedText[0]) {
    case 'kilépés':
      context.gameState.quit = false;
      break;
    case 'menj':
      movement(splittedText[1], matrix);
      break;
    case 'beszélj':
      talk(splittedText[1], matrix);
      break;
    case 'támadj':
      attack(splittedText[1], matrix);
      break;
    case 'helyem':
      place(matrix);
      break;
    case 'segíts':
      help();
      break;
    case 'gyógyulj':
      rest(splittedText[1]);
      break;
    case 'felvesz':
      pickUp(splittedText[1], matrix);
      break;
    case 'használj':
      itemUsage(splittedText[1]);
      break;
    case 'hasiTasi':
      inventorySummary();
      break;
    case 'Pisti':
      pisti();
      break;
    default:
      console.log('Tanulj meg magyarul!');
  }
};
