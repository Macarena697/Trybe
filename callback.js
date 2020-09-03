//  Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done, que precisa ser chamada após os testes assíncronos.


const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}
module.exports = SumNumbers
