'use strict';

const movement = require('./actions/movement');
const place = require('./actions/place');
const talk = require('./actions/talk');
const attack = require('./actions/attack');
const context = require('../data/context');

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
    default:
      console.log('Tanulj meg magyarul!');
  }
};
