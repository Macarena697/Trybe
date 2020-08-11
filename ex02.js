//  Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = palavra => {
  let arrayPalavra = palavra.split(" ");
  let maiorPalavra = 0;
  let resultado;
  for (let i in arrayPalavra) {
    if (arrayPalavra[i].length > maiorPalavra) {
      maiorPalavra = arrayPalavra[i].length;
      resultado = arrayPalavra[i];
    }
  }
  return resultado;
};
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));