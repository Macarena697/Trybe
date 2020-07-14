//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 1; i < numbers.length; i += 1){
  for (e = 0; e < i; e += 1){
    if (numbers[i] > numbers[e]){
      let cambiarNum = numbers[i];
      numbers[i] = numbers[e];
      numbers[e] = cambiarNum;
    }
  }
}
console.log(numbers);