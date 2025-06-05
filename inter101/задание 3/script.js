'use strict'
const menu = document.querySelector(".main-nav");
const burgerBtn = document.querySelector(".burger")
const listItems = document.querySelectorAll(".main-nav__item")
burgerBtn.addEventListener('click', () => {
    console.log('клик');
    menu.classList.toggle('menu--open');
    listItems.forEach(item => {
        item.classList.toggle('menu--open');
    });
})
