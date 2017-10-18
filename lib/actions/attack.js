'use strict';

const gameArea = require('../../data/game-area/game-field/index');
const position = require('../../data/game-area/starter-position');
const player = require('../../data/characters/player');

module.exports = function (npc, matrix) {
  let targetNpc = gameArea[matrix[position[1]][position[0]]].npc;
  if (targetNpc.hp > 0) {
    let n = 1;
    if (gameArea[matrix[position[1]][position[0]]].npc.name === npc) {
      while (targetNpc.hp > 0 && player.hp > 0) {
        console.log(n + '. kör');
        n++;
        targetNpc.hp -= player.str - targetNpc.str;
        console.log('Megtámadtad a ' + targetNpc.name + ' ' + (player.str - targetNpc.str) + ' sebzéssel');
        player.hp -= targetNpc.str - player.str;
        console.log('Megtámaddott a ' + targetNpc.name + ' ' + (targetNpc.str - player.str) + ' sebzéssel');
        console.log('--------------------------------------');
      }
    }
    console.log('Jelenlegi életerőd ' + player.hp + ' || ellenfeled hátramaradó életereje ' + targetNpc.hp);
    if (targetNpc.hp <= 0) {
      console.log(targetNpc.name + ' meghalt.');
      console.log('--------------------------------------');
    }
  } else {
    console.log(targetNpc.name + ' halott, nincs kivel harcolnod');
  }
};
