'use strict';

const gameArea = require('../../data/game-area/game-field/index');
const position = require('../../data/game-area/starter-position');
const player = require('../../data/characters/player');
const context = require('../../data/context');

module.exports = function (npc, matrix) {
  let targetNpc = gameArea[matrix[position[1]][position[0]]].npc;
  if (targetNpc.hp > 0) {
    let n = 1;
    if (gameArea[matrix[position[1]][position[0]]].npc.name === npc) {
      while (targetNpc.hp > 0 && player.hp > 0) {
        console.log(n + '. kör');
        n++;
        targetNpc.hp -= player.str;
        console.log('Megtámadtad a ' + targetNpc.name + ' ' + (player.str) + ' sebzéssel');
        player.hp -= targetNpc.str;
        console.log('Megtámaddott a ' + targetNpc.name + ' ' + (targetNpc.str) + ' sebzéssel');
        console.log('--------------------------------------');
      }
    }
    /* if (player.hp <= 0) {
      context.gameState = false;
    } */
    console.log('Jelenlegi életerőd ' + player.hp + ' || ellenfeled hátramaradó életereje ' + targetNpc.hp);
    if (targetNpc.hp <= 0) {
      console.log(targetNpc.name + ' meghalt.');
      console.log('--------------------------------------');
    }
  } else {
    console.log('A(z)' + targetNpc.name + ' halott, nincs kivel harcolnod.');
  }
};
