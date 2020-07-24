//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//
//Valor esperado no retorno da função: 6.
 
let numeros = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor(numeros){
  let numMenor = 0;
  let indiceNumMenor = 0;
  for (let indice in numeros){
    if (numeros[indice] < numMenor){
      numMenor = numeros[indice];
      indiceNumMenor = indice;
    }
  }
  return indiceNumMenor;
}
console.log(indiceMenorValor(numeros));