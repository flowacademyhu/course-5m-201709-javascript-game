'use strict';
const item = './';
const fs = require('fs');
let x = fs.readdirSync(item)
    .filter(file => file !== 'index.js')
    .map(file => require('./' + file))
    .map(obj => obj.name);

console.log(x);
module.exports = x;
