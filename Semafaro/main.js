let btnGreen = document.querySelector('.btn-green');
let btnYellow = document.querySelector('.btn-yellow');
let btnRed = document.querySelector('.btn-red');
let btnAleatorio = document.querySelector('.btn-aleatorio');
let img = document.querySelector('#lamp');
let btnOff = document.querySelector('.btn-off');

function turnoGreen() {
    clearInterval(imagensID);
    img.src = 'img/verde.png'
};

function turnoYellow() {
    clearInterval(imagensID);
    img.src = 'img/amarelo.png';
};

function turnoRed() {
    clearInterval(imagensID);
    img.src = 'img/vermelho.png'
};

function turnoOff() {
    clearInterval(imagensID);
    img.src = 'img/desligado.png';
};

let imagem = ['img/vermelho.png', 'img/amarelo.png', 'img/verde.png']
let imagensID;
let index = 0;
function turnoAleatorio() {
    clearInterval(imagensID);
    imagensID = setInterval(() => {
        img.src = imagem[index];
        index = (index + 1) % imagem.length;
    }, 1000);
};

btnGreen.addEventListener('click', turnoGreen);
btnYellow.addEventListener('click', turnoYellow);
btnRed.addEventListener('click', turnoRed);
btnOff.addEventListener('click', turnoOff);
btnAleatorio.addEventListener('click', turnoAleatorio);