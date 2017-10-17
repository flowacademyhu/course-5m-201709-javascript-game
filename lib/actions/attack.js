'use strict';

const gameArea = require('../../data/game-area/game-field/index');
const position = require('../../data/game-area/starter-position');
const player = require('../../data/characters/player');

module.exports = function (npc, matrix) {
  let targetNpc = gameArea[matrix[position[1]][position[0]]].npc;
  if (gameArea[matrix[position[1]][position[0]]].npc.name === npc) {
    while (targetNpc.hp > 0 && player.hp > 0) {
      targetNpc.hp -= player.str;
      player.hp -= targetNpc.str;
    }
  }
  console.log(player.hp, targetNpc.hp);
};
