const soma = require('./soma')

test('adiciona bem dois numeros', () => {
  expect(soma(1,2)).toBe(3);
})

//npm test para executar o teste na consola
