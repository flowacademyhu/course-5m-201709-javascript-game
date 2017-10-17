'use strict';

const gameArea = require('../../data/game-area/game-field/index');
const position = require('../../data/game-area/starter-position');

module.exports = function (npc, matrix) {
  if (gameArea[matrix[position[1]][position[0]]].npc !== null) {
    if (gameArea[matrix[position[1]][position[0]]].npc.name === npc) {
      console.log(gameArea[matrix[position[1]][position[0]]].npc.text);
    } else {
      console.log('Kihez beszélsz?');
    }
  } else {
    console.log('Nincs itt senki.');
  }
};
