const { employees, species } = require('../data/zoo_data');

let staffMember = {};
const team = [];

function getAnimalsName(...animalsId) {
  const animalsName = [];
  animalsId.map((animals) => {
    species.map((specie) => {
      if (animals === specie.id) {
        animalsName.push(specie.name);
      }
      return animalsName;
    });
    return animalsName;
  });
  return animalsName;
}

function getLocations(...animals) {
  const location = [];
  animals.forEach((animal) => {
    species.filter((specie) => {
      if (animal === specie.name) {
        location.push(specie.location);
      }
      return location;
    });
    return location;
  });
  return location;
}

function checkEmployee(info) {
  const test = employees.find((employee) =>
    employee.firstName.includes(info.name)
      || employee.lastName.includes(info.name)
      || employee.id.includes(info.id));
  if (test === undefined) {
    throw new Error('Informações inválidas');
  }
  return test;
}

function getEmployeesCoverage(info) {
  if (info) {
    const person = checkEmployee(info);
    staffMember.id = person.id;
    staffMember.fullName = `${person.firstName} ${person.lastName}`;
    staffMember.species = getAnimalsName(...person.responsibleFor);
    staffMember.locations = getLocations(...getAnimalsName(...person.responsibleFor));
    return staffMember;
  }
  employees.forEach((employee) => {
    staffMember = {};
    staffMember.id = employee.id;
    staffMember.fullName = `${employee.firstName} ${employee.lastName}`;
    staffMember.species = getAnimalsName(...employee.responsibleFor);
    staffMember.locations = getLocations(...getAnimalsName(...employee.responsibleFor));
    team.push(staffMember);
  });
  return team;
}

module.exports = getEmployeesCoverage;
