//var a = 10;
//var b = 5;
//
//console.log('Soma: ' + (a + b));
//console.log('Subtração: ' + (a - b));
//console.log('Multiplicação: ' + (a * b));
//console.log('Divisão: ' + (a / b));
//console.log('Módulo: ' + (a % b));
let resultado;

function suma (a, b){
  resultado = a + b;
  return resultado;
}

function subtr (a, b){
  resultado = a - b;
  return resultado;
}

function multi (a, b){
  resultado = a * b;
  return resultado;
}

function divi (a, b){
  resultado = a / b;
  return resultado;
}

function modulo (a, b){
  resultado = a % b;
  return resultado;
}

suma (10, 15);
console.log (resultado);
subtr (50, 30);
console.log (resultado);
multi (10, 50);
console.log (resultado);
divi (50, 2);
console.log (resultado);
modulo (2, 6);
console.log (resultado);
