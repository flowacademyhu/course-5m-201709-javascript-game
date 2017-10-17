'use strict';

const axeRobber = require('../../characters/npc/axe-robber');

module.exports = {
  desc: 'Az úton hirtelen elédugrik egy jól megtermett haramia, artikulálatlan motyogással követeli a pénzedet, vagy megsuhint a baltájával!',
  deadNpcDesc: 'Az út szélén a porban egy halott bandita fekszik, ő már senki pénzét sem veszi el.',
  shortDesc: 'poros út húzódik. Az útszéli bokrok gyanúsan mozognak, és néha fémes csillogás szikrázik a lavalak közül.',
  npc: axeRobber,
  item: null,
  accessible: true
};
