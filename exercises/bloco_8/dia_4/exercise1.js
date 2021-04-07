
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// 1. Dada uma matriz de matrizes, transforme em uma única matriz.

function flatten() {
  // escreva seu código aqui
  const reduced = arrays.reduce((number, currentValue) => number.concat(currentValue))
   return reduced;
}
console.log(flatten(arrays))

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);