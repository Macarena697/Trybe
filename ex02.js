function numbersDivide(suma) {
  const divide = [2, 3, 5, 10]
  .map(number => suma / number);
  return divide;
}

function numbersList () {
  let numbersArray = [];
  numbersArray = [];
  let suma = 0;
  for (let i = 0; i < 11; i += 1) {
    let number = Math.floor(Math.random()* 50);
    numbersArray.push(number);
    number *= number;
    suma += number;
  }
  return suma;
}

const fetchPromise = () => {
  const promise = new Promise ((resolve, reject) => {
    const suma = numbersList();
    if (suma < 8000) {
      return resolve(suma);
    }
    reject(number);
  })
  promise
    .then(suma => numbersDivide(suma))
    .then(array => array.reduce((number, acc) => number + acc, 0))
    .then(number => console.log(number))
    .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
}

fetchPromise();
