const faq1 = document.querySelector('.faq1');
const faq2 = document.querySelector('.faq2');
const faq3 = document.querySelector('.faq3');
const faq4 = document.querySelector('.faq4');

const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');

const sA1 = document.querySelector('.sA1');
const sA2 = document.querySelector('.sA2');
const sA3 = document.querySelector('.sA3');
const sA4 = document.querySelector('.sA4');


faq1.addEventListener('click', () => {

    if(answer1.classList.contains('active')) {
        answer1.style.display = "none";
        answer1.classList.remove('active');
        sA1.style.transform = 'rotate(0deg)';
    } else {
        answer1.style.display = "flex";
        answer1.classList.add('active');
        sA1.style.transform = 'rotate(180deg)';
    }

})


faq2.addEventListener('click', () => {

    if(answer2.classList.contains('active')) {
        answer2.style.display = "none";
        answer2.classList.remove('active');
        sA2.style.transform = 'rotate(0deg)';
    } else {
        answer2.style.display = "flex";
        answer2.classList.add('active');
        sA2.style.transform = 'rotate(180deg)';
    }

})


faq3.addEventListener('click', () => {

    if(answer3.classList.contains('active')) {
        answer3.style.display = "none";
        answer3.classList.remove('active');
        sA3.style.transform = 'rotate(0deg)';
    } else {
        answer3.style.display = "flex";
        answer3.classList.add('active');
        sA3.style.transform = 'rotate(180deg)';
    }

})


faq4.addEventListener('click', () => {

    if(answer4.classList.contains('active')) {
        answer4.style.display = "none";
        answer4.classList.remove('active');
        sA4.style.transform = 'rotate(0deg)';
    } else {
        answer4.style.display = "flex";
        answer4.classList.add('active');
        sA4.style.transform = 'rotate(180deg)';
    }

})
