const assert = require('assert');

const flagDict = {};
let counter = 0; // max 32 ?

function createFlag(string) {
  return flagDict[string] = Math.pow(2, counter++);
}

function createMask(...flags) {
  return flags.reduce((a, b) => a | b);
}

function hasFlag(mask, flag) {
  return !!(mask & flag);
}

function hasAllFlags(mask, ...flags) {
  return flags.every(flag => hasFlag(mask, flag));
}

function hasAtLeastOneFlag(mask, ...flags) {
  return flags.some(flag => hasFlag(mask, flag));
}

function getFlagNames(mask) {
  return Object.keys(flagDict).filter(name => hasFlag(mask, flagDict[name]));
}

const flag1 = createFlag('flag1');
const flag2 = createFlag('flag2');
const flag3 = createFlag('flag3');
const flag4 = createFlag('flag4');
const flag5 = createFlag('flag5');

const mask = createMask(flag1, flag3, flag4);

assert(hasFlag(mask, flag1))
assert(!hasFlag(mask, flag2))

assert(hasAllFlags(mask, flag1, flag3));
assert(!hasAllFlags(mask, flag1, flag2));

assert(hasAtLeastOneFlag(mask, flag1, flag2));
assert(!hasAtLeastOneFlag(mask, flag2, flag5));

assert.deepEqual(getFlagNames(mask), ['flag1', 'flag3', 'flag4']);

console.log(`All good! ${mask.toString(2)}`);
