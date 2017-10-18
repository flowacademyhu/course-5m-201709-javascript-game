'use strict';

const signTable = require('../../characters/npc/sign-table');

module.exports = {
  desc: 'Egy poros úton állsz. Előtted egy ' + '\x1b[33m' + 'kopott tábla' + '\x1b[0m' + '.',
  shortDesc: 'látsz egy utat. Az úton egy távoli tábla áll magányosan.',
  deadNpcDesc: null,
  npc: signTable,
  item: null,
  accessible: true
};
