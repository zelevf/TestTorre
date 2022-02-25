const hamburger = document.querySelector('.hamburger');
const plus = document.querySelector('.plusMobile');
const navegadorMobile = document.querySelector('.navegacion');
const header = document.querySelector('.header');



hamburger.addEventListener('click', () => {

    if (navegadorMobile.style.display == 'flex') {
        navegadorMobile.style.display = 'none';
        hamburger.style.display = 'flex';
        
    } else {
        navegadorMobile.style.display = 'flex';
        hamburger.style.display = 'none';
        plus.style.display = 'absolute';
        header.style.flexDirection = 'column';
        header.style.display = 'absolute';
    }
})




