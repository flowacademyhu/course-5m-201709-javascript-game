#!/usr/bin/env nodejs
'use strict';

let readlineSync = require('readline-sync');
let answer;

while (true) {
    answer = readlineSync.question('Mondj valamit kerlek:\t');
    if (quit()) break;
    console.log('retyetye');
}

function quit(answer) {
    return answer == 'kilépés'
}