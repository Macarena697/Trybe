//Para o primeiro exercício de hoje, //faça um programa que, dado um valor n //qualquer, seja n > 1, imprima na tela //um quadrado feito de asteriscos de //lado de tamanho n. Por exemplo:

let cantidadAstericos = 100;
let asteriscosLinea = [];
if (cantidadAstericos > 1){
  for (let i = 0; i < cantidadAstericos; i += 1){
    asteriscosLinea += "*"; 
  }
  for (let e = 0; e < cantidadAstericos; e += 1){
    console.log(asteriscosLinea) * cantidadAstericos;
  }
}