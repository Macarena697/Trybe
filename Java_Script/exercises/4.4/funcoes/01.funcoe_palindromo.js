//Crie uma função que receba uma string //e retorne true se for um palíndromo, //ou false, se não for.
//
//Exemplo de palíndromo: arara.
//
//verificaPalindrome("arara");
//
//Retorno esperado: true
//
//verificaPalindrome("desenvolvimento");
//
//Retorno esperado: false




function verificaPalindrome (val1) { 
  let arrayLetras = val1.split("");
  ultimaLetra = arrayLetras.length-1;
  let ePolindromo = true;

  for (indice in arrayLetras){
    if (arrayLetras[indice] == arrayLetras[ultimaLetra]){
      ultimaLetra -= 1;
    }
    else{
      ePolindromo = false;
    }  
  }
  return ePolindromo;
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'))
