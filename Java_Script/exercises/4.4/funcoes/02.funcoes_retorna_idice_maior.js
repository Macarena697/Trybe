//Crie uma função que receba um array de //inteiros e retorne o índice do maior //valor.
//
//Array de teste: [2, 3, 6, 7, 10, 1];.
//
//Valor esperado no retorno da função: 4.

let numeros =  [2, 3, 6, 7, 10, 1];

function indiceNumMaior (verificar){
  numMaior = 0;
  indice = 0;
  numMaiorIndice = 0;

  for (i = 0; i < verificar.length; i += 1){
    if (verificar[i] > numMaior){
      numMaior = verificar[i];
      numMaioIndice = i; 
    }
  }
  return numMaioIndice;
}
console.log(indiceNumMaior(numeros))

//function indiceDoMaior(numeros) {
//  let indiceMaior = 0;
//  for (let indice in numeros) {
//    if (numeros[indiceMaior] < numeros[indice]) {
//      indiceMaior = indice;
//    }
//  }
//  return indiceMaior;
//}