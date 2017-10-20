'use strict';

const dragon = require('../../characters/npc/dragon');

module.exports = {
  desc: 'A várban csücsül a ' + '\x1b[31m' + 'sárkány' + '\x1b[0m' +
  ' üsd meg hát mielőtt ő süt meg téged. A sárkánynál a kircsilány, ha megszerzed nyertél ám!',
  deadNpcDesc: null,
  shortDesc: 'az öreg vártorony magasodik kapuja zárva, míg a kulcsot meg nem szerzed hozzá.',
  npc: dragon,
  item: null,
  accessible: false
};
