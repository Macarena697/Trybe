//Peões: Só podem se mover uma casa ou duas casas para frente (durante a primeira jogada), e também podem matar na diagonal peças do time adversário.
//Torre: Se movimentam em linha reta ou para os lados, por todas as casas.
//Cavalo: Se movimenta em L.
//Bispo: Se movimenta somente na diagonal por todo o tabuleiro.
//Rainha: Pode se movimentar para qualquer lado e direção.
//Rei: Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop -> diagonals

//console.log('ALFABETO'.toLowerCase());

let pieca = "CaValo";
let piecaMinuscula = pieca.toLocaleLowerCase();

switch (piecaMinuscula){
  case 'peões':
    console.log(piecaMinuscula + ': Só podem se mover uma casa ou duas casas para frente (durante a primeira jogada), e também podem matar na diagonal peças do time adversário.');
    break;
  case 'torre':
    console.log(piecaMinuscula + ': Se movimentam em linha reta ou para os lados, por todas as casas.');
    break;
    case 'cavalo':
      console.log(piecaMinuscula + ': Se movimenta em L.');
      break;
    case 'bispo':
      console.log(piecaMinuscula + ': Se movimenta somente na diagonal por todo o tabuleiro.');
      break;
    case 'rainha':
      console.log(piecaMinuscula + ': Pode se movimentar para qualquer lado e direção.');
      break;
    case 'rei':
      console.log(piecaMinuscula + ': Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.');
      break;
    case 'rei':
      console.log(piecaMinuscula + ': Se movimenta para qualquer lado ou direção, todaviasomente de casa em casa.');
      break;
    default:
      console.log('ERROR ' + piecaMinuscula + ' No e uma pieca de xadrez')
}
