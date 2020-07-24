//Faça um programa que, dado um valor //definido numa variável, retorne //"positive" se esse valor for positivo, //"negative" se for negativo e "zero" //caso contrário.

let numero = -10;
let mostrar;

if (numero > 0) {
  mostrar = true;
}else if (numero < 0) {
  mostrar = false;
}else{
  mostrar = 0;
}
console.log(mostrar);
  