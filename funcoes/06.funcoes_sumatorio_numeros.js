//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//
//Valor de teste: N = 5.
//
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let numero = 5;

function sumatoriaNumero(numero){
  let suma = 0;
  for (let i = 0; i <= numero; i += 1){
    suma += i;
  }
  return suma;  
}
console.log(sumatoriaNumero(numero));

