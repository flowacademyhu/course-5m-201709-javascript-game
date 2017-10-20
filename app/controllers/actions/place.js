'use strict';

const matrixCurrentPosition = require('../../data/game-area/matrix-current-position');
const gameArea = require('../../data/game-area/game-field/index');
const position = require('../../data/game-area/starter-position');

module.exports = function (matrix) {
  matrixCurrentPosition(position[1], position[0], matrix, gameArea);
};
