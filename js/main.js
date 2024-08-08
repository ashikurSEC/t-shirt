//! Navbar Open and Close...

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if ( bar ) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if ( close ) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


let mainImage = document.getElementById("mainImage");
let smallImg  = document.getElementsByClassName("small-image");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].addEventListener('click', () =>{
        mainImage.src = smallImg[i].src;
    });
}
