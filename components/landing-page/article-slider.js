'use strict';

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs a');

let idx = 0;
//let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 2) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 2;
  }

  imgs.style.transform = `translateX(${-idx * 424}px)`;
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
});

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
});