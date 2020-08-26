//  const assert = require('assert');

//  ESTA VALIDACAO PASA

//  const pushNumber = (list, number) => list.push(number);
//  
//  let numbers = [];
//  
//  pushNumber(numbers, 1);
//  pushNumber(numbers, 2);
//  pushNumber(numbers, 3);
//  
//  assert.deepEqual(numbers, [1, 2, 3]);
// -----------------------------------------

//  ESTA VALIDACAO NAO PASA------->
//  const assert = require('assert');
//  
//  const pushNumber = (list, number) => list.push(number);
//  
//  let numbers = [];
//  
//  setTimeout(() => pushNumber(numbers, 1), 3000);
//  pushNumber(numbers, 2);
//  pushNumber(numbers, 3);
//  
//  assert.deepEqual(numbers, [1, 2, 3]); // essa validação falha

//  ---TEM QUE VALIDAR DEPOIS DO MESMO TEMPO DE ACIONAR A FUNCAO----é necessário testar o numbers após 3000 milissegundos:------------------------

const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepEqual(numbers, [2, 3, 1]), 3000);

//  o array recebe primeiro o 2, depois o 3, e após os 3 segundos do setTimeout, ele recebe o 1.

//  -----CALLBACK------------
let salarioBruto = 3000;
let salarioLiquido;
getSalario(salarioBruto, (resultado) => {
    salarioLiquido = resultado;
    console.log(`O salário liquido é ${salarioLiquido}`);
});
function getSalario(salarioBruto, callback)
{
    let liquido = 0;
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    liquido = salarioBruto - descontos;
    
    return callback(liquido);
}

//  ---------------------------------------------------------



const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

assert.equal(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.equal(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser

//  ------------------------------
const userFullName2 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality2 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian"
    };
    console.log(user);
    return console.log(callback(user));
  }, delay());
};

getUser2(userFullName2); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser2(userNationality2); // deve imprimir "Ivan is Russian" depois de um certo tempo


//  -----------------------------------------------------------------
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay2 = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    }
    else {
      const errorMessage = "Country could not be found";
    }
  }, delay2());
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);