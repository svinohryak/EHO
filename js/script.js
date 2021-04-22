const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let i = 0;
let images = document.querySelectorAll('.photo-gallery img');

function prevImg() {
    images[i].className = '';
    i--;
    if(i < 0) {
        i = images.length -2;
    }
    images[i].className = 'shown';
}

function nextImg() {
    images[i].className = '';
    i++;
    if(i >= images.length - 2) {
        i = 0;
    } 
    images[i].className = 'shown';
}

prevBtn.addEventListener('click', nextImg)
nextBtn.addEventListener('click', nextImg)

let changImgTimer = setInterval(timerBtn, 5000);
function timerBtn() {
  images[i].className = '';
  i++; 
  if (i >= images.length - 2) {
    i = 0;
  }
  images[i].className = 'shown';
}

// burger menu

function burgerBtnChanging() {
  document.querySelector('#menu').classList.toggle('change');
  document.querySelector('#header').classList.toggle('header--burger');
  document.querySelector('#nav-ul').classList.toggle('nav-ul--burger');
}

document.querySelector('#menu').addEventListener('click', burgerBtnChanging);
