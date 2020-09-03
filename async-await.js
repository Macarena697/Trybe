test('Testando com async/await', async () => {
  const listDogs = await getListAnimals('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

//  Perceba que a diferença entre elas é o async. Como existe uma promise a ser testada, é necessário o uso do await, para que o teste espere a finalização da promise e, em seguida, execute o teste remanescente. A variável listDogs recebe o retorno da promise e executa os testes.
//  Abaixo está o código para quando ocorre o reject da promise. É necessário adicionar o bloco try/catch.

test('Testando com async/await, testando o reject', async () => {
  try {
    await getListAnimals('Lion');
  } catch (error) {
    expect(error).toEqual({ error: "Não possui esse tipo de animal." })
  }
});


//  outro exemplo

describe('Testando Async/Await - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });
});