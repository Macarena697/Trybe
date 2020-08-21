    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

//  Dada uma matriz de matrizes, transforme em uma única matriz.

const flatten = () => arrays.reduce(novoArray);

const novoArray = (accumuletor, currentValue) => accumuletor.concat(currentValue);

console.log(flatten(arrays));

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
