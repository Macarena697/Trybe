//Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a //F. Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou //maior que 100.

let nota = 56;
let letra;
let bandeira;
if (0 < nota && nota > 100){
  console.log('Por favor, colque um valor de 0 a 100');
  bandeira = false;
} else if (nota >= 90) { 
  letra = 'A';
  bandeira = true;
} else if (nota >= 80){
  letra = 'B';
  bandeira = true;
} else if (nota >= 70){
  letra = 'C';
  bandeira = true;
} else if (nota >= 60){
  letra = 'D';
  bandeira = true;
} else if (nota >= 50){
  letra = 'E';
  bandeira = true;
} else if (nota < 50){
  letra = 'F';
  bandeira = true;
} else{ 
  console.log('Por favor coloque un valor numerico de 0 a 100');
  bandeira = false;
} 

if (bandeira == true){
console.log('Tua nota: ' + letra);
}