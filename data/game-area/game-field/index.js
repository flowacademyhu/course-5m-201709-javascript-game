'use strict';
const bridge = require('./bridge');
const road = require('./road');
const grassfield = require('./grassfield');
const river = require('./river');
const woods = require('./woods');

module.exports = {
  0: woods,       1: woods,  2: woods,  3: woods,  4: woods,       5: woods,       6: woods,       7: road,        8:  grassfield, 9:  grassfield,
  10: woods,      11: woods, 12: woods, 13: woods, 14: woods,      15: woods,      16: woods,      17: road,       18: river,      19: river,
  20: woods,      21: woods, 22: woods, 23: woods, 24: woods,      25: woods,      26: woods,      27: road,       28: grassfield, 29: grassfield, 
  30: woods,      31: woods, 32: woods, 33: woods, 34: woods,      35: woods,      36: woods,      37: road,       38: grassfield, 39: grassfield,
  40: river,      41: river, 42: bridge,43: river, 44: river,      45: bridge,     46: river,      47: bridge,     48: river,      49: river,
  50: woods,      51: woods, 52: woods, 53: woods, 54: woods,      55: road,       56: woods,      57: road,       58: grassfield, 59: grassfield,
  60: woods,      61: woods, 62: woods, 63: road,  64: road,       65: road,       66: road,       67: road,       68: grassfield, 69: grassfield,
  70: woods,      71: woods, 72: woods, 73: road,  74: grassfield, 75: grassfield, 76: grassfield, 77: grassfield, 78: grassfield, 79: grassfield,
  80: grassfield, 81: woods, 82: woods, 83: road,  84: grassfield, 85: grassfield, 86: grassfield, 87: grassfield, 88: grassfield, 89: grassfield,
  90: grassfield, 91: road,  92: road,  93: road,  94: grassfield, 95: grassfield, 96: grassfield, 97: grassfield, 98: grassfield, 99: grassfield 
};
