function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let calendarDays = document.querySelector('#days');
let buttons = document.querySelector('.buttons-container');
let buttonFriday = document.createElement('button');
let buttonHoliday = document.createElement('button');
let holidays = document.querySelectorAll('.day.holiday');
let holiday = document.querySelector('.day.holiday');
let fridays = document.querySelectorAll('.day.friday')


for (index = 0; index < dezDaysList.length; index += 1) {
  let monthDays = document.createElement('li');
  monthDays.className = 'day';
  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
    monthDays.className = 'day friday';
  }
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    monthDays.className = 'day holiday';
  }
  monthDays.innerText = dezDaysList[index];
  calendarDays.appendChild(monthDays);
};

function Feriados() {
  buttonHoliday.className = 'btn-holiday';
  buttonHoliday.innerText = "Feriados";
  buttons.appendChild(buttonHoliday);
};

function SextaFeira() {
  buttonFriday.className = 'btn-friday';
  buttonFriday.innerText = 'Sexta-Feira';
  buttons.appendChild(buttonFriday);
};

Feriados()

buttonHoliday.addEventListener('click', ChangeColor); 

function ChangeColor() {
  holidays.forEach(st => st.style.backgroundColor = 'rgb(222,205,150)');
}


SextaFeira() 

buttonFriday.addEventListener('click', ChangeText);
console.log(fridays)
function ChangeText(){
  fridays.forEach(tx => tx.innerText = "Sextou!");
}


let days = document.querySelectorAll('.day');
days.forEach(days => days.addEventListener('mouseover', function (){
  days.style['font-size'] = '50px';
})) 

days.forEach(days => days.addEventListener('mouseout', function (){
  days.style['font-size'] = '20px';
})) 


function Task(task) {
  let tasks = document.querySelector('.my-tasks');
  let assignment = document.createElement('span');
  assignment.innerText = task;
  tasks.appendChild(assignment);
}

Task("Programar")
Task("Cozinhar")
Task("Dormir")

function SettingColor(cor) {
  let tasks = document.querySelector('.my-tasks');
  let color = document.createElement('div');
  color.className = 'task'
  color.style['background-color'] = cor;
  tasks.appendChild(color);
}
  SettingColor('red');


let task = document.querySelector('.task');
task.addEventListener('click', function () {
task.className = 'task-selected';
})

let taskSelected = document.querySelector('.task-selected');
taskSelected.addEventListener('click', function () {
  taskSelected.className = 'task';
  })
  
