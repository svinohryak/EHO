const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let i = 0;
let images = document.querySelectorAll('.photo-gallery > img');

// function prevImg() {
//     images[i].className = '';
//     i--;
//     if(i < 0) {
//         i = images.length -1;
//     }
//     images[i].className = 'shown';
// }

// function nextImg() {
//     images[i].className = '';
//     i++;
//     if(i >= images.length) {
//         i = 0;
//     } 
//     images[i].className = 'shown';
// }

// if(prevBtn) {
//     prevBtn.addEventListener('click', prevImg);
// }
// if(nextBtn) {
//     nextBtn.addEventListener('click', nextImg);
// }

if(prevBtn && nextBtn) {
    function prevImg() {
        images[i].className = '';
        i--;
        if(i < 0) {
            i = images.length -1;
        }
        images[i].className = 'shown';
    }
    
    function nextImg() {
        images[i].className = '';
        i++;
        if(i >= images.length) {
            i = 0;
        } 
        images[i].className = 'shown';
    }

    prevBtn.addEventListener('click', prevImg);
    nextBtn.addEventListener('click', nextImg);
}

// auto change gallery

// let changImgTimer = setInterval(nextImg, 5000);

// burger menu

function burgerBtnChanging() {
  document.querySelector('#menu').classList.toggle('change');
  document.querySelector('#header').classList.toggle('header--burger');
  document.querySelector('#nav-ul').classList.toggle('nav-ul--burger');
}

document.querySelector('#menu').addEventListener('click', burgerBtnChanging);
