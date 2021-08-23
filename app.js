let btnp1 = document.getElementById('btnp1')
let btnp2 = document.getElementById('btnp2')
let span1 = document.getElementById('p1')
let span2 = document.getElementById('p2')
let reset = document.getElementById('btnreset')
let maximo = document.getElementById('maximo')
let letraa = document.getElementById('letraa')

btnp1.addEventListener('click', addp1)
btnp2.addEventListener('click', addp2)
reset.addEventListener('click', resetar)


let pontos1 = 0;
let pontos2 = 0;

function verdeevermelho() {
    if (pontos1 >= maximo.value && pontos1 - pontos2 > 1) {
        span1.classList.add('verde')
        span2.classList.add('vermelho')
        letraa.classList.add('letraa')
    } else if (pontos2 >= maximo.value && pontos2 - pontos1 > 1) {
        span2.classList.add('verde')
        span1.classList.add('vermelho')
        letraa.classList.add('letraa')
    }
}

function cinzeira() {
    if (pontos1 >= maximo.value && pontos1 - pontos2 > 1 || pontos2 >= maximo.value && pontos2 - pontos1 > 1) {
        btnp1.classList.add('cinza')
        btnp2.classList.add('cinza')
    } else if (pontos1 >= maximo.value && pontos1 - pontos2 > 1 || pontos2 >= maximo.value && pontos2 - pontos1 > 1) {
        btnp1.classList.add('cinza')
        btnp2.classList.add('cinza')
    }
}

function addp1(evt) {
    if (pontos1 >= maximo.value && pontos1 - pontos2 > 1 || pontos2 >= maximo.value && pontos2 - pontos1 > 1) {
        // nothing
    } else pontos1++
    span1.innerText = pontos1;
    verdeevermelho();
    cinzeira();
}

function addp2(evt) {
    if (pontos1 >= maximo.value && pontos1 - pontos2 > 1 || pontos2 >= maximo.value && pontos2 - pontos1 > 1) {
        // nothing
    } else pontos2++
    span2.innerText = pontos2;
    verdeevermelho();
    cinzeira();
}

function resetar(evt) {
    pontos1 = 0;
    pontos2 = 0;
    span1.innerText = pontos1;
    span2.innerText = pontos2;
    btnp1.classList.remove('cinza')
    btnp2.classList.remove('cinza')
    span1.classList.remove('verde', 'vermelho')
    span2.classList.remove('verde', 'vermelho')
    letraa.classList.remove('letraa')
}

body.addEventListener('click', verdeevermelho)
body.addEventListener('click', cinzeira)