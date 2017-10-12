'use strict';
const files = './';
const fs = require('fs');
let npcs = fs.readdirSync(files)
    .filter(file => file !== 'index.js')
    .map(file => require('./' + file))

console.log(npcs);
module.exports = npcs;
