const navigator = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const menuImg = document.querySelector('.imgm');
const triangle = document.querySelector('.triangle');
var textm = document.getElementsByClassName('textm');
const t1 = document.getElementById('.t1');
const t2 = document.getElementById('.t2');
const t3 = document.getElementById('.t3');
const t4 = document.getElementById('.t4');
const t5 = document.getElementById('.t5');
let scrb = document.getElementById("moveUp")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrb.style.visibility = "visible";
    } else {
        scrb.style.visibility = "hidden";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function history() {
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
