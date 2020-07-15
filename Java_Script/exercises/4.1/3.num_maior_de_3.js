//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let num1 = 20;
let num2 = 27;
let num3 = 30;
let numMaior;

// Nao deu certo !!!! a tercera condicao nao deixa
//let numMaior = num1 > num2 && num1 > num3 ? num1 + " e maior que " + num2 + " e " + num3 : num2 + " e maior ///que " + num1 + " e " + num3 : num3 + " e maior que " + num1 + " e " + num2;
//console.log(numMaior);

if (num1 > num2 && num1 > num3){
  numMaior = num1;  
}
else if (num2 > num1 && num2 > num3) {
  numMaior = num2; 
}
else{
  numMaior = num3;
}
console.log("O numero maior e " + numMaior)