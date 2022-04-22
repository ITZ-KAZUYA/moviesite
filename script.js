'use strict';
const line01 = document.querySelector('.line1');
const line02 = document.querySelector('.line2');
const line03 = document.querySelector('.line3');
const hiddenhamburgurnavbar = document.querySelector('.hamburgurnavbar');

document.querySelector('.hamburger-container').addEventListener('click', function(){
line01.classList.toggle('firstline');
line02.classList.toggle('secondline');
line03.classList.toggle('thirdline');
hiddenhamburgurnavbar.classList.toggle('hamburgurnavbarjava');

})