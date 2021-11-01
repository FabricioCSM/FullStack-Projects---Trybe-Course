const { employees } = require('../data/zoo_data');
// console.log(employees)

function isManager(id) {
  let manager = null;
  const staffMember = employees.filter((employee) => employee.id === id);
  manager = staffMember.every((element) => (element.managers.length < 2));
  return manager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const staff = employees.filter((employee) => employee.managers.includes(managerId));
  return staff.reduce((team, staffMembers) => {
    team.push(`${staffMembers.firstName} ${staffMembers.lastName}`);
    return team;
  }, []);
}
module.exports = { isManager, getRelatedEmployees };
