'use strict'
const tabLinks = document.querySelectorAll('.tablinks');
const tabContents = document.querySelectorAll('.tabcontent');

tabLinks.forEach(tab => {
    tab.addEventListener('click', openTabs);
});

function openTabs(evt) {
    const btnTarget = evt.currentTarget;
    const day = btnTarget.dataset.day;

    tabContents.forEach(content => {
        content.classList.remove('tabcontent-active');
    });

    tabLinks.forEach(link => {
        link.classList.remove('tablinks-active');
    });

    document.querySelector(`#${day}`).classList.add('tabcontent-active');
    btnTarget.classList.add('tablinks-active');
}