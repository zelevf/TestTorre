const hamburger = document.querySelector('.hamburger');
const plus = document.querySelector('.plusMobile');
const navegadorMobile = document.querySelector('.navegacion');
const header = document.querySelector('.header');
const body = document.querySelector('.body');

const rrss = document.createElement('div');
const backgroundMenu = document.createElement('div');
const linkFace = document.createElement('a');
const linkTwit = document.createElement('a');
const facebook = document.createElement('img');
const twitter = document.createElement('img');

hamburger.addEventListener('click', () => {

    linkFace.href = 'https://facebook.com';
    linkTwit.href = 'https://twitter.com';

    linkFace.target = '_blank';
    linkTwit.target = '_blank';

    facebook.src = "./images/icon-facebook.svg";
    twitter.src = "./images/icon-twitter.svg";

    rrss.className = "rrssContainer";
    backgroundMenu.className = "backgroundMenu";
    facebook.className = "socialRed";
    twitter.className = "socialRed";

    facebook.cursor = "pointer";
    twitter.cursos = "pointer";


    navegadorMobile.appendChild(rrss);
    navegadorMobile.appendChild(backgroundMenu);
    rrss.appendChild(linkFace);
    rrss.appendChild(linkTwit);
    linkFace.appendChild(facebook);
    linkTwit.appendChild(twitter);

    if (navegadorMobile.style.display == 'flex') {
        navegadorMobile.style.display = 'none';
        hamburger.style.display = 'flex';
        plus.style.display = 'none';
        
    } else {
        navegadorMobile.style.display = 'flex';
        navegadorMobile.style.position = 'fixed';
        body.style.position = 'fixed';
        hamburger.style.display = 'none';
        plus.style.display = 'flex';
        plus.style.display = 'absolute';
        body.style.position = 'fixed';
    }
})


plus.addEventListener('click', () => {

    if(navegadorMobile.style.display == 'flex') {
        navegadorMobile.style.display = 'none';
        hamburger.style.display = 'flex';
        plus.style.display = 'none';
        header.style.backgroundColor = '#ffffff';
        header.style.position = 'relative';
        body.style.position = 'relative';
        rrss.remove();
        backgroundMenu.remove();
    }

})


