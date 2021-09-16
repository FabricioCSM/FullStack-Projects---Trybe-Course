// Desafio 10
function techList(techNames, name) {
  let objects = [];
  if (techNames.length === 0) {
    return 'Vazio!';
  }
  {
    for (let index = 0; index < techNames.length; index += 1) {
      let techObj = {
        tech: techNames.sort()[index],
        name: name,
      };
      objects.push(techObj);
    }
    return objects;
  }
}

// Desafio 11
function generatePhoneNumber(number) {
  let notPossible = 'não é possível gerar um número de telefone com esses valores';
  let phoneNumber = []; 
  let count = 0;
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (number.length == 11) {
    for (let index = 0; index <= number.length; index += 1) {
      if (number[index] < 0 || number[index] > 9) {
        return notPossible;
      }
      phoneNumber.push(number[index]);
      for (let position = 0; position <= phoneNumber.length; position += 1) {
        if (phoneNumber[position] == number[index]){
          count += 1;
        }
        if (count >= 3) {
          return notPossible;
        }
      }  
    }
    // for (let numbers = 0; numbers <= number.length; numbers += 1) {
    //   let count = 0;
    //   if (number[index] === number[numbers]){
    //     count += 1;
    //     if (count >= 3) {
    //       return  notPossible;
    //     }
    //     return '(' + number[0] + number[1] + ') ' + number[2] + number[3] + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + number[9] + number[10] 
    //     }
    //   }
    // }
    return number;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC) && lineB < Math.abs(lineA + lineC) && lineC < Math.abs(lineA + lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
// Utilizado de site stackoverflow "How to find sum of integers in a string using JavaScript" e visto que podemos usar a função match() para separar apenas números em uma string
function hydrate(string) {
  let quantity = string.match(/\d+/g);
  let water = 0;
  for (let index = 0; index < quantity.length; index +=1) {
    water += parseInt(quantity[index]);
  }
  if (water === 1) {
    return '1 copo de água';
  }
  return water + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
