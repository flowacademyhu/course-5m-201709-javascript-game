'use strict';
const road = require('./game-field/road');


module.exports = function buildMap(){
    let matrix= [];
    for(let i=0 ; i<10 ; i++){
        matrix[i] = [];
        for(let j=0 ; j<10; j++ ){
            matrix[i][j];
            matrix[i][j] = (road);
        }
    }
    return matrix[i][j];
}
