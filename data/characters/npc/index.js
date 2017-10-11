'use strict';
const axeRobber = require('./axe-robber');
const coboldThief = require('./cobold-thief');
const drunkenBeggar = require('./drunken-beggar');
const drunkenWizzard = require('./drunken-wizzard');
const innKeeper = require('./innkeeper');
const wildBoar = require('./wild-boar')

let npcs = [axeRobber,coboldThief,drunkenBeggar,drunkenWizzard,innKeeper,wildBoar];
let npcList = [];
let i;
for(i = 0; i<npcs.length; i++) {
      npcList.push(npcs[i].name);
}
console.log(npcList);