let titulo = "Exercício 5.2 - JavaScript DOM"
let main_text = document.querySelector('.main_text');

let titulo_text = document.createElement('h1');

titulo_text.innerText = titulo;

main_text.appendChild(titulo_text);


let main = document.createElement('main')
main.className = "main-content"

let body = document.querySelector('.main_body')

body.appendChild(main)

let section = document.createElement('section')
section.className = 'center-content'

main.appendChild(section)

let paragraph = document.createElement('p')

let text = "Esse é um texto do exercicio, muito massa!"

paragraph.innerText = text

section.appendChild(paragraph)