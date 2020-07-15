// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let cantidadAstericos = 5;
let asteriscosLinea = [];

if (cantidadAstericos > 1){
  for (let i = 0; i < cantidadAstericos; i += 1){
    asteriscosLinea += "*"; 
    console.log(asteriscosLinea);
  }
}