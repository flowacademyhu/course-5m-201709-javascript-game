'use strict';

const files = './';
const fs = require('fs');
let gameFields = fs.readdirSync(files)
    .filter(file => file !== 'index.js')
    .map(file => require('./' + file))

console.log(gameFields);
module.exports = gameFields;
