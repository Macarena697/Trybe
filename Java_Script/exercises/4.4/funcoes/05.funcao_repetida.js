//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//
//Valor esperado no retorno da função: 2.

let numeros = [2, 3, 2, 5, 8, 2, 3]

function numRepetidos(numeros){
  let contador = 0;
  let contador2 = 0;
  let numMaiorVeces;
  for (indice in numeros){
    for (indice2 in numeros){
      if (numeros[indice] === numeros[indice2]){
        contador += 1;
      }
    }
    if (contador > contador2){
      contador2 = contador;
      numMaiorVeces = numeros[indice];
    }
    contador = 0;
  }
  return numMaiorVeces;
}
console.log(numRepetidos(numeros));