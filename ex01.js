const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

//  1-Teste se o retorno de sum(4, 5) é 9
  let expected = sum(4, 5);
  assert.equal(expected, 9, "Tem que ser 4");

  //  2-Teste se o retorno de sum(0, 0) é 0
  expected = sum(0, 0);
  assert.equal(expected, 0, "Tem que ser 0");

  //  3-Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
  expected = sum(4, "5");
  assert(expected);

  //  4-Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  assert.fail(expected);