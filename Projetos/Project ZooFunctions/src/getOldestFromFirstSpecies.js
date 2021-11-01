const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const staffMember = employees.filter((employee) => employee.id === id);
  const animal = staffMember[0].responsibleFor[0];
  const specificAnimal = species.filter((specie) => specie.id === animal);
  const result = specificAnimal[0].residents.reduce((element, next) =>
    (element.age > next.age ? element : next));
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
