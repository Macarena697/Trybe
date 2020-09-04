//  Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
//  Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.

const getUserName = require('./ex02');

it('', () => {
  expect.assertions(1);
  return getUserName(4).then(data => {
    expect(data).toBe('Mark')
  })
})

it('', () => {
  expect.assertions(1);
  return getUserName(3).catch(e =>
    expect(e).toMatch('error'))
})

