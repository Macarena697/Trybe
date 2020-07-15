//Escreva um programa que d//efina três //números em variáveis no s//eu começo e //retorne true se uma das t//rês for par. //Caso contrário, ele retor//na false.
//Bonus: use somente um if.//
//GARABITO
//var a = 1;
//var b = 3;
//var c = 5;
//
//var isEven = false;
//
//if ((a % 2 == 0 || b % 2 == 0 || c % 2 == 0)) {
//  isEven = true;
//};
//console.log(isEven);

let num1 = 16;
let num2 = 11;
let num3 = 11;
let resto1 = num1 % 2;
let resto2 = num2 % 2;
let resto3 = num3 % 2;
let bandeira

if (num1 % 2 == 0 || resto2 == 0 || resto3 == 0) {
  bandeira = true;
}else {
  bandeira = false;
}
console.log(bandeira);