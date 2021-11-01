const { species } = require('../data/zoo_data');

const regions = [ 'NE', 'NW', 'SE', 'SW' ];
const regionsAnimals = {};

function getAnimalMap(options) {
  if (!options || options.includeNames === undefined) {
    return getAnimals();
  }
  if (options.includeNames === true && options.sex === '') {
    return getAnimalsWithName();
    }
  if (options.sex) {
    // console.log(options.sex);
    // console.log('teste2')
    const sex = options.sex;
    // console.log(sex)
    return getAnimalsWithName(sex);
  }
}

function getAnimalsResidents(animalName) {
  const animals = {};
  let residents = species.filter((specie ) => (animalName === specie.name));
  residentsName = residents[0].residents; 
  animals[animalName] = residentsName.map((animal) => animal.name)
  return animals;
  }

function getAnimals() {
  regions.map((region) => {
    regionsAnimals[region] = [];
    species.filter((specie) => {
      if (specie.location === region) {
        regionsAnimals[region].push(specie.name);
      }
    });
  });
  return regionsAnimals;
}

function getAnimalsWithName() {
  regions.map((region) => {
    regionsAnimals[region] = [];
    species.filter((specie) => {
      if (specie.location === region) {
        regionsAnimals[region].push(getAnimalsResidents(specie.name));
      }
    });
  });
   return regionsAnimals;
}

function getAnimalsBySex(sex) {

}

getAnimalsBySex('female')
module.exports = getAnimalMap;
