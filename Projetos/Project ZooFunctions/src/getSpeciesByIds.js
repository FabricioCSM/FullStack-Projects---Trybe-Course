const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = [];
  if (!ids) {
    return [];
  }
  ids.forEach((identification) => {
    const test = species.filter((specie) => specie.id === identification);
    animals.push(...test);
  });
  return animals;
}

module.exports = getSpeciesByIds;
