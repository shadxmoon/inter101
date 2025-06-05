'use strict'
const accordeonQuestions = document.querySelectorAll('.accordeon__question');

accordeonQuestions.forEach((question) => {
    question.addEventListener('click', function () {
        const answer = question.parentElement.querySelector('.accordeon__answer');
        
        question.classList.toggle('accordeon__question--active');
        
        answer.classList.toggle('accordeon__answer--visible');

        if (answer.classList.contains('accordeon__answer--visible')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
        }
    });
});