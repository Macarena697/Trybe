//  Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.

const fatorial = num => {
  let resultado = 1;
  for (let i = 2; i <= num; i += 1) {
    resultado *= i;
  }
  return resultado
}

//const factorial = number => number > 1 ? number * factorial(number - 1) : 1  
console.log(fatorial(5));
