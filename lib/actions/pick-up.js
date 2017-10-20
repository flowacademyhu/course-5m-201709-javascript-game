'use strict';

const gameArea = require('../../data/game-area/game-field/index');
const position = require('../../data/game-area/starter-position');
const hasiTasi = require('../../lib/menu/inventory');

module.exports = function (item, matrix) {
  let currentNpc = gameArea[matrix[position[1]][position[0]]].npc;
  if (currentNpc.hp > 0 && item === currentNpc.items.name) {
    console.log('A(z) ' + currentNpc.name + ' nem hagyja hogy elvedd tőle!');
  } else if (item === currentNpc.items.name) {
    hasiTasi.inventory.inactiveItems.push(currentNpc.items);
    console.log(currentNpc.items);
    console.log('A(z) ' + item + ' bekerült a hasiTasiba.');
  } else {
    console.log('Nem találom sehol... Biztos jó tárgynevet írtál be?');
  }
};
