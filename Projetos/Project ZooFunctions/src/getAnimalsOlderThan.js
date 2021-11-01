const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let minimumAge = null;
  const firstSelection = data.species.filter((specie) => specie.name === animal);
  firstSelection.forEach((elements) => {
    const selected = elements.residents;
    minimumAge = selected.every((element) => element.age >= age);
  });
  return minimumAge;
}

module.exports = getAnimalsOlderThan;
