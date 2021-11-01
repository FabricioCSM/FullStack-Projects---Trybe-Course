const email = document.getElementById('email');
const password = document.getElementById('senha');
const button = document.querySelector('.btn');
const checkboxAgreement = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
/* email e senhas corretos */
function login(event) {
  event.preventDefault();
  if (email.value.toString() === 'tryber@teste.com' && password.value.toString() === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', login);
/* validar botao */
function agreementValidation() {
  if (checkboxAgreement.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

checkboxAgreement.addEventListener('click', agreementValidation);

/* contagem caracteres textarea */
function count() {
  counter.innerHTML = 500 - textArea.value.length
}

textArea.addEventListener('keyup', count);