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
const amount = document.querySelectorAll('.amount');
let num = 0;

plus.addEventListener('click', function () {
    num++
    amount.forEach((amount) => {
        amount.innerHTML = num
    })
})


minus.addEventListener('click', function () {
    if (num === 0) {
        return null;
    }
    num--;
    amount.forEach((amount) => {
        amount.innerHTML = num
    })
})

const cart = document.querySelector('#cart');
const cartOut = document.querySelector('#cart-out')

cart.addEventListener('click', function () {
    cartOut.classList.toggle('show')
})