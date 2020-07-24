//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//
//Valor esperado no retorno da função: Fernanda.

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome (nomes){
  let indiceMaior = 0;
  let nomeMaior;
  for (indice in nomes){
    if (nomes[indice].length > indiceMaior){
      indiceMaior = nomes[indice].length;
      nomeMaior = nomes[indice];
    }
  }
  return nomeMaior;
}
console.log(maiorNome(nomes));