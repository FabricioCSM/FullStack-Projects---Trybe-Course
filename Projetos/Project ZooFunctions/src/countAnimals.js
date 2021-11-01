const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const pop = {};
  if (!animal) {
    species.forEach((zooSpecie) => {
      pop[zooSpecie.name] = zooSpecie.residents.length;
    });
    return pop;
  }
  if (animal.sex) {
    const specie = species.filter((element) => element.name === animal.specie);
    const popularity = specie[0].residents.filter((resident) => resident.sex === animal.sex);
    return popularity.length;
  }
  const specie = species.filter((element) => element.name === animal.specie);
  return specie[0].residents.length;
}

module.exports = countAnimals;
