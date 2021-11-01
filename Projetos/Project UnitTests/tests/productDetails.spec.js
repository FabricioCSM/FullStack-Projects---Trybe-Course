const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    
    // Teste se o retorno da função é um array.
    //Arrai.isArray encontrado em https://github.com/facebook/jest/issues/3457
    expect(Array.isArray(productDetails('param1','param2'))).toBe(true);
    
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('alcool', 'máscara')).toHaveLength(2);
    
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const test = productDetails('alcool', 'Máscara');
    expect(typeof test[0]).toBe('object');
    expect(typeof test[1]).toBe('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const result = [
      {
      name: 'Alcool gel',
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara',
      details: {
        productId: 'Máscara123',
      }
    }
  ];
  expect(productDetails('Alcool gel', 'Máscara')).toStrictEqual (result);    
    
    // Teste se os dois productIds terminam com 123.
    const test2 = productDetails('alcool', 'Máscara');
    expect(test2[0].details.productId).toMatch(/123/);
    expect(test2[1].details.productId).toMatch(/123/);
  });
});
