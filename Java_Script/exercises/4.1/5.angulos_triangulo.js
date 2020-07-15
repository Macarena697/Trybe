//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um //triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso //contrário.

let angulo1 = 80;
let angulo2 = 100;
let angulo3 = 0;
let resposta;

if (angulo1 + angulo2 + angulo3 == 180) {
  resposta = true;
}else{
  resposta = false;
}
console.log(resposta);