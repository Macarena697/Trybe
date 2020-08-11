////  Adicionando novas chaves (keys)
//const customer = {
//  firstName: 'Roberto',
//  age: 22,
//  job: 'Teacher',
//};
//
//let newKey = 'lastName';
//const lastName = 'Ferreira';
//customer[newKey] = lastName;
//newKey = 'fullName';
//const fullName = `${customer.firstName} ${customer.//lastName}`;
//customer[newKey] = fullName;
//console.log(customer);
//
//function objeto(objeto, nomeChave, valor) {
//  objeto = {};
//  objeto[nomeChave] = valor;
//  console.log(objeto);
//}
//
//objeto("carro", "color", "azul");

//  Parte II - Object.keys
// Logging property names and values using Array.forEach
var obj = { 0: 'a', ma: 'b', 2: 'c' };

Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  
  console.log(val + ' -> ' + obj[val]);

});

// logs
// 0 -> a
// 1 -> b
// 2 -> c
//  --------------OBJECT.KEY---------------------------
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function habilidades() {
  
  Object.keys(student1).forEach(function(val, idx, array) {
    console.log(`${val} : ${student1[val]} `)
  
});
}
habilidades();
//  ------------------------OBJECT.KEY--------------------------------------------


const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(i in arrayOfSkills){
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

//  ---------------Object.values--------------------------

const listSkillsWithValues = (student1) => Object.values(student1);
console.log(listSkillsWithValues(student1));

//  -----Object.values- for
const listSkillsWithFor = (student1) => {
  const skills = [];
  for(skill in student1) {
    skills.push(student1[skill]);
  }

  return skills;
};
console.log(listSkillsWithFor(student1));

//-------------Object.entries--------------------------------

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

//  --------Object.entries - ---------------
for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};

//  ---------Object.assign-------------

const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

//  --------MUDA UMA PROPIEDADE MUDA OUTRA------------
clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

//  ------EVITAR ISSO------
const newPerson = Object.assign({},person,lastName);