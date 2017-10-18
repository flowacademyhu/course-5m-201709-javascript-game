'use strict';

const wildBoar = require('../../characters/npc/wild-boar');

module.exports = {
  desc: 'Az árnyas erdő sőrőjében megpillantasz egy ' + '\x1b[31m' + 'vaddisznót' + '\x1b[0m' +
  ' turkálni hangos röfögések közepette.',
  deadNpcDesc: 'Az árnyas erdő sőrőjében megpillantasz egy vaddisznó tetemét.',
  shortDesc: 'az árnyékos erdőből röfögés hallatszik.',
  npc: wildBoar,
  item: null,
  accessible: true
};
