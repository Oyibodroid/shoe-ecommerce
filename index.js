const nav = document.querySelector('#nav-links');
const burger = document.querySelector('#hamburger');
const closer = document.querySelector("#close")

burger.addEventListener('click', function () {
    nav.style.left = '0%'
})

closer.addEventListener('click', function () {
    nav.style.left = '-200%'
})

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const amount = document.querySelector('#amount');
let num = 0;

plus.addEventListener('click', function () {
    num++
    amount.innerHTML = num
})


minus.addEventListener('click', function () {
    if (num === 0) {
        return null
    }
    num--
    amount.innerHTML = num
})
