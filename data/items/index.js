'use strict';
const item = './data/items/';
const fs = require('fs');
let items = fs.readdirSync(item)
    .filter(file => file !== 'index.js')
    .map(file => require('./' + file))
    .map(obj => obj.name);

module.exports = items;
