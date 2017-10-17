'use strict';

const signTable = require('../../characters/npc/sign-table')

module.exports = {
  desc: 'Egy poros úton állsz. Előtted egy kopott tábla.',
  shortDesc: 'látsz egy utat. Az úton egy távoli tábla áll magányosan.',
  deadNpcDesc: null,
  npc: signTable,
  item: null,
  accessible: true
};
