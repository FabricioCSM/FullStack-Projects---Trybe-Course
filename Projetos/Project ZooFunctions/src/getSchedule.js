const { species, hours } = require('../data/zoo_data');

let schedule = {};
const daysOfWeek = Object.keys(hours);
const animals = species.map((specie) => specie.name);

function getAllSchedule() {
  daysOfWeek.map((days) => {
    schedule[days] = {
      officeHour: `Open from ${hours[days].open}am until ${hours[days].close}pm`,
      exhibition: (species.filter((el) => el.availability.includes(days))).map((e) => e.name),
    };
    return schedule;
  });
  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return schedule;
}

function getSpecificDay(day) {
  if (day === 'Monday') {
    schedule = {};
    schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return schedule;
  }
  schedule = {};
  schedule[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: (species.filter((el) => el.availability.includes(day))).map((e) => e.name),
  };
  return schedule;
}

function getSpecificAnimal(animal) {
  const specificAnimal = species.filter((specie) => specie.name === animal);
  return specificAnimal[0].availability;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined || !scheduleTarget) {
    return getAllSchedule();
  }

  if (daysOfWeek.some((day) => day === scheduleTarget)) {
    return getSpecificDay(scheduleTarget);
  }

  if (animals.some((animal) => animal === scheduleTarget)) {
    return getSpecificAnimal(scheduleTarget);
  }
  return getAllSchedule();
}

module.exports = getSchedule;
