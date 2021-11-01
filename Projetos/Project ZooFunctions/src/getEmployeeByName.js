const data = require('../data/zoo_data');

function getEmployeeByName(staffName) {
  if (!staffName) {
    return {};
  }
  return data.employees.filter((e) => e.firstName === staffName || e.lastName === staffName)[0];
}

module.exports = getEmployeeByName;
