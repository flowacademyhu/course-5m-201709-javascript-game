'use strict';

const output = require('./output')
let commands = {
    usage: usage => usage,
    movement: movement => movement,
    attack: attack => attack
};

module.exports = (inputText) => {
    let splitted = inputText.split(" ");
    let outputText = commands[splitted[0]](splitted[1]);    
    output(outputText);
}