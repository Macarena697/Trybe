const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;

const sumNumbers2 = numbers.reduce(getSum);

console.log(sumNumbers2); // 113

//  ------------------------------------------------

//  comparados valores para buscar o maior valor em um array.
const numbers2 = [50, 85, -30, 3, 15];

const getBigger = (result, number) => (result > number) ? result : number;

const bigger = numbers2.reduce(getBigger, 0);
console.log(bigger);//85

//  -------------------some todos os números pares do array:-----
//  Solução usando apenas reduce:---------------------------------
const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getPairs = (pair, number) => (number % 2 === 0) ? pair + number : pair

const pairs =numbers3.reduce(getPairs);
console.log(pairs); //152

//  Solução usando filter e reduce:

const pairNum = numbers3.filter((pairNumber) => pairNumber % 2 === 0)
const sumPairNum = pairNum.reduce((result, number) => result + number)

console.log(sumPairNum) //152

// RESOLUCAO GABARITO
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e //conciso!

console.log(sumNumbers(numbers)); // 152