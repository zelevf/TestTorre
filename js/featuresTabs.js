const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');

const containerTab1 = document.querySelector('.containerTab1');
const containerTab2 = document.querySelector('.containerTab2');
const containerTab3 = document.querySelector('.containerTab3');


tab1.addEventListener('click', () => {
    containerTab1.style.display = "flex";
    containerTab2.style.display = "none";
    containerTab3.style.display = "none";
    tab1.style.fontWeight = "bold";
    tab1.style.color = "#2a2b3f";
    tab1.style.borderBottom = "4px solid #fd5957";
    tab2.style.fontWeight = "400";
    tab2.style.color = "#85858d";
    tab2.style.borderBottom = "1px solid #85858d";
    tab3.style.fontWeight = "400";
    tab3.style.color = "#85858d";
    tab3.style.borderBottom = "1px solid #85858d";
})

tab2.addEventListener('click', () => {
    containerTab2.style.display = "flex";
    containerTab1.style.display = "none";
    containerTab3.style.display = "none";
    tab1.style.fontWeight = "400";
    tab1.style.color = "#85858d";
    tab1.style.borderBottom = "1px solid #85858d";
    tab2.style.fontWeight = "bold";
    tab2.style.color = "#2a2b3f";
    tab2.style.borderBottom = "4px solid #fd5957";
    tab3.style.fontWeight = "400";
    tab3.style.color = "#85858d";
    tab3.style.borderBottom = "1px solid #85858d";
})

tab3.addEventListener('click', () => {
    containerTab3.style.display = "flex";
    containerTab1.style.display = "none";
    containerTab2.style.display = "none";
    tab1.style.fontWeight = "400";
    tab1.style.color = "#85858d";
    tab1.style.borderBottom = "1px solid #85858d";
    tab2.style.fontWeight = "400";
    tab2.style.color = "#85858d";
    tab2.style.borderBottom = "1px solid #85858d";
    tab3.style.fontWeight = "bold";
    tab3.style.color = "#2a2b3f";
    tab3.style.borderBottom = "4px solid #fd5957";
})

