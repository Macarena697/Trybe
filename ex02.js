const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//  1-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperad
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Error');

//  2-Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Error');

//  3-Verifique se o array passado por parâmetro não sofreu alterações
