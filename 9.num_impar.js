//Escreva um programa que //defina três números em variáveis no seu começo e retorne true se uma das três for //ímpar. Caso contrário, e//le retorna false.
//Bonus: use somente um if//

let num1 = 10; let num2 = 12; let num3 = 15;
let bandeira = false;

if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1){
  bandeira = true;
}
console.log(bandeira);

