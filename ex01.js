const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//  Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a // ser modificado, a chave que deverá ser adicionada e o valor dela.

agregarTurno(lesson2, 'turno', 'manha')
function agregarTurno(objeto, chave, valor) {
  let newKey = chave;
  objeto[newKey] = valor;
  console.log(lesson2);
}

//  Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (lesson) => Object.keys(lesson);
console.log(listKeys(lesson1));

//  Crie uma função para mostrar o tamanho de um objeto.

const sizeObject = (lesson) => Object.keys(lesson).length;
console.log(sizeObject(lesson3));

//  Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (lesson) => Object.values(lesson);
console.log(listValues(lesson2));

//  Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = {};
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
//allLessons.lesson1 = Object.entries(lesson1);
//allLessons.lesson2 = Object.entries(lesson2);
//allLessons.lesson3 = Object.entries(lesson3);
console.log(allLessons);

//  Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

console.log(counterPupils());
function counterPupils() {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
}

//const getNumberOfStudents = (obj) => {
//  let total = 0;
//  const array = Object.keys(obj);
//  for (i in array) {
//    total += obj[array[i]].numeroAlunos;
//  }
//  return total;
//};
//console.log(getNumberOfStudents(allLessons));

