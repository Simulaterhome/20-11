const navigator = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const menuImg = document.querySelector('.imgm');
const triangle = document.querySelector('.triangle');
var textm = document.getElementsByClassName('textm');
const t1 = document.querySelector('.t1');
const t2 = document.querySelector('.t2');
const t3 = document.querySelector('.t3');
const t4 = document.querySelector('.t4');
const t5 = document.querySelector('.t5');
const infb = document.querySelector('.infb');
const scrb = document.getElementById("moveUp");
const inft = document.getElementById("inft");
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const td1 = document.querySelector('.td1');
const td2 = document.querySelector('.td2');

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrb.style.visibility = "visible";
    } else {
        scrb.style.visibility = "hidden";
    }
}

scrb.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

navigator.addEventListener('click', closeMenu);

t1.addEventListener('click', closeMenu);
t1.addEventListener('click', hst);

t2.addEventListener('click', closeMenu);
t2.addEventListener('click', tday);

t3.addEventListener('click', closeMenu);
t3.addEventListener('click', changes);

t4.addEventListener('click', closeMenu);
t4.addEventListener('click', memories);

t5.addEventListener('click', closeMenu);
t5.addEventListener('click', wishes);

inft.addEventListener('click', infbar);
infb.addEventListener('click', infbar);

img3.addEventListener('click', imgMove1);
td1.addEventListener('click', imgMove1);

img4.addEventListener('click', imgMove2);
td2.addEventListener('click', imgMove2);

function infbar() {
    infb.classList.toggle('ps1');
    infb.classList.toggle('ps2');
    inft.classList.toggle('hidden');
}

function imgMove1() {
    img3.classList.toggle('hidden');
    img4.classList.toggle('hidden');
    td1.classList.toggle('hidden');
}

function imgMove2() {
    img3.classList.toggle('hidden');
    img4.classList.toggle('hidden');
    td2.classList.toggle('hidden');
}

function hst() {
    document.body.scrollTop = window.innerHeight; // For Safari
    document.documentElement.scrollTop = window.innerHeight; // For Chrome, Firefox, IE and Opera
}

function tday() {
    document.body.scrollTop = window.innerHeight*2; // For Safari
    document.documentElement.scrollTop = window.innerHeight*2; // For Chrome, Firefox, IE and Opera
}

function changes() {
    document.body.scrollTop = window.innerHeight*3; // For Safari
    document.documentElement.scrollTop = window.innerHeight*3; // For Chrome, Firefox, IE and Opera
}

function memories() {
    document.body.scrollTop = window.innerHeight*4; // For Safari
    document.documentElement.scrollTop = window.innerHeight*4; // For Chrome, Firefox, IE and Opera
}

function wishes() {
    document.body.scrollTop = window.innerHeight*5; // For Safari
    document.documentElement.scrollTop = window.innerHeight*5; // For Chrome, Firefox, IE and Opera
}

function closeMenu() {
    navigator.classList.toggle('fa-solid');
    navigator.classList.toggle('fa-bars-staggered');
    navigator.classList.toggle('fa-regular');
    navigator.classList.toggle('fa-circle-xmark');
    navigator.classList.toggle('color1');
    navigator.classList.toggle('color2');
    menuImg.classList.toggle('hidden');
    triangle.classList.toggle('hidden');
    for (var i = 0; i < textm.length; i++) {
        const x = textm[i];
        x.classList.toggle('hidden');
    }
    navigator.classList.toggle('open');
}
