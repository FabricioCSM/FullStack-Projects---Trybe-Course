const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const people = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      people.child += 1;
    }
    if (person.age >= 18 && person.age < 50) {
      people.adult += 1;
    }
    if (person.age >= 50) {
      people.senior += 1;
    }
  });
  return people;
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined || entrants === {}) {
    return 0;
  }
  if (entrants !== {}) {
    let price = 0;
    const persona = countEntrants(entrants);
    price += persona.adult * prices.adult;
    price += persona.child * prices.child;
    price += persona.senior * prices.senior;
    return price;
  }
}

module.exports = { calculateEntry, countEntrants };
