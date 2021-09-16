// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;  
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let splitted = string.split(' ');
  return splitted;
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index <= array.length; index += 1) {
    let concatenatedLast = array[(array.length - 1)];
    let concatenatedFirst = array[0];
    return concatenatedLast + ', ' + concatenatedFirst;
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
//Utilizei a função Math.max() e o spread operator visto na documentação do Mozzila em "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max" 
function highestCount(array) {
  let highest = Math.max(...array);
  let count = 0;
  for (let numbers of array) {
    if (highest === numbers) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse - cat2) === 2 || (cat2 - mouse) === 2 && (mouse - cat1) === 3 || (cat1 - mouse) === 3) {
    return 'cat2';
  }
  if ((mouse - cat2) === 12 || (cat2 - mouse) === 12 && (mouse - cat1) === 6 || (cat1 - mouse) === 6) {
    return 'cat1';
  }
  {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      let fizz = 'fizz';
      array.push(fizz);
    }
    if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0) {
      let buzz = 'buzz';
      array.push(buzz);
    }
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      let fizzBuzz = 'fizzBuzz';
      array.push(fizzBuzz);
    }
    if (numbers[index] % 3 !== 0 && numbers[index] % 5 !== 0) {
      let bug = 'bug!';
      array.push(bug);
    }
  }
    return array;
}

// Desafio 9
function encode(string) {
  let word = string.split('');
  for (let index = 0; index <= word.length; index += 1) {
    if (word[index] === 'a') {
      word[index] = 1;
    }
    if (word[index] === 'e') {
      word[index] = 2;
    }
    if (word[index] === 'i') {
      word[index] = 3;
    }
    if (word[index] === 'o') {
      word[index] = 4;
    }
    if (word[index] === 'u') {
      word[index] = 5;
    }
  }
  return word.join('');
}
function decode(string) {
  let word = string.split('');
  for (let index = 0; index <= word.length; index += 1) {
    if (word[index] == 1) {
      word[index] = 'a';
    }
    if (word[index] == 2) {
      word[index] = 'e';
    }
    if (word[index] == 3) {
      word[index] = 'i';
    }
    if (word[index] == 4) {
      word[index] = 'o';
    }
    if (word[index] == 5) {
      word[index] = 'u';
    }
  }
  return word.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
