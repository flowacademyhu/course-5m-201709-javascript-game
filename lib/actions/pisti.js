'use strict';
const player = require('../../data/characters/player');

module.exports = function () {
  console.log('Jelenlegi életerőd: ' + player.hp);
  console.log('Jelenlegi erőd: ' + player.str);
  console.log('Jelenlegi inteligenciád: ' + player.int);
  console.log('Jelenlegi ügyességed: ' + player.agi);
};
