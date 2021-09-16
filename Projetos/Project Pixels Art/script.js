let colorPalette = document.querySelector('#color-palette');
let body = document.querySelector('body');
let main = document.createElement('main');
let size = document.createElement('div');
let square = document.createElement('div');
let paletteSquares = ['red', 'yellow', 'green'];
let button = document.createElement('button');
button.id = 'clear-board';
button.innerText = 'Limpar';
let buttonBoardSize = document.createElement('button');
buttonBoardSize.id = 'generate-board';
buttonBoardSize.innerText = 'VQV';
let inputSize = document.createElement('input');
inputSize.id = 'input-size';
let pixelBoard = document.createElement('div');
pixelBoard.id = 'pixel-board';
let squareWidth = 5;
let squareHeight = 5;
size.appendChild(inputSize);
size.appendChild(buttonBoardSize);
body.appendChild(main);
main.appendChild(colorPalette);
main.appendChild(button);
main.appendChild(size);
main.appendChild(pixelBoard);

function createPaletteSquares() {
  square.className = 'color black selected';
  square.style.backgroundColor = 'black';
  colorPalette.appendChild(square);
  for (let index = 0; index < paletteSquares.length; index += 1) {
    let square = document.createElement('div');
    square.className = 'color ' + paletteSquares[index];
    square.style.backgroundColor = paletteSquares[index];
    colorPalette.appendChild(square);
  }
}
createPaletteSquares();

//  Após ter feito a lógica dos for loops, tive problemas quanto a posição de cada linha de 5, encontrei a solução utilizando <br> e configuração de css em https://stackoverflow.com/questions/50773490/how-to-multiple-row-div-square-pattern
function createBoard() {
  for (let index = 0; index < squareHeight; index += 1) {
    for (let columns = 0; columns < squareWidth; columns += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
    }
    let br = document.createElement('br');
    pixelBoard.appendChild(br);
  }
}
createBoard();

function noColorSelected() {
  let selected = document.querySelectorAll('.pixel');
  selected.forEach(ev => ev.addEventListener('click', function () {
    ev.style.backgroundColor = 'black';
  }));
}
noColorSelected();

function colorPixel(color) {
  let selected = document.querySelectorAll('.pixel');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].addEventListener('click', function () {
      event.target.style.backgroundColor = color;
    });
  }
}

//  Ao ter problemas com o replace() para substituir o className dos outros elementos não selecionados, encontrei em https://sebhastian.com/javascript-remove-string-from-string/ a utilização da função substring() 
function selectColor() {
  let palette = document.querySelectorAll('.color');
  palette.forEach (pl => pl.addEventListener('click', function () {
    for (let index = 0; index < palette.length; index += 1) {
      palette[index].className = palette[index].className.substring(0, 12);
    }
    event.target.className += ' selected';
    let color = event.target.style.backgroundColor;
    colorPixel(color);
  }));
}
selectColor();

// removeAttribute pesquisado a partir do link https://stackoverflow.com/questions/1040402/removing-html-element-styles-via-javascript
function cleanPixels() {
  let button = document.querySelector('button');
  let pixelsBoard = document.querySelectorAll('.pixel');
  button.addEventListener('click', function () {
    for (let index = 0; index < pixelsBoard.length; index += 1) {
      pixelsBoard[index].removeAttribute('style');
    }   
  });
}
cleanPixels();