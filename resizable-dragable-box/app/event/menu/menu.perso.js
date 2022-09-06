const menuPerso = document.querySelector('.menu-perso');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

let setY = "";
let setX = "";

document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();

    menuPerso.style.display = "block";
    menuPerso.style.top = `${e.clientY}px`;
    menuPerso.style.left = `${e.clientX}px`;

    setY = `${e.clientY}px`;
    setX = `${e.clientX}px`;
})

document.addEventListener('click', () => {
    menuPerso.style.display = "none";
})

img1.addEventListener('click', () => {
    searchImage(setX, setY);

})
img2.addEventListener('click', () => {
    document.body.style.background = "lightgreen";
})