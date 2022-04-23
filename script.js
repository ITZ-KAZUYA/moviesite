'use strict';
const line01 = document.querySelector('.line1');
const line02 = document.querySelector('.line2');
const line03 = document.querySelector('.line3');
const overLay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger-container');
const hiddenhamburgurnavbar = document.querySelector('.hamburgurnavbar');

hamburger.addEventListener('click', function(){
line01.classList.toggle('firstline');
line02.classList.toggle('secondline');
line03.classList.toggle('thirdline');
overLay.classList.toggle('hidden');
hiddenhamburgurnavbar.classList.toggle('hamburgurnavbarjava');

})

overLay.addEventListener('click', function(){
line01.classList.toggle('firstline');
line02.classList.toggle('secondline');
line03.classList.toggle('thirdline');
overLay.classList.toggle('hidden');
hiddenhamburgurnavbar.classList.toggle('hamburgurnavbarjava');
    
});