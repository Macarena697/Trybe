const fatorial = num => {
  let resultado = 1;
  for (let i = 2; i <= num; i += 1) {
    resultado *= i;
  }
  return resultado
}

//const factorial = number => number > 1 ? number * factorial(number - 1) : 1  
console.log(fatorial(5));
