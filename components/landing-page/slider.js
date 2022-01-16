'use strict';

const sliderBtnLeft = document.querySelector('.slider__button-left');
const sliderBtnRight = document.querySelector('.slider__button-right');
const sliderBtns = [sliderBtnRight, sliderBtnLeft];

sliderBtns.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const sliderLink = document.querySelector('.slider__link');
    const sliderLinkInner = document.querySelector('.slider__link-inner');
    sliderLink.classList.toggle('slider__link_disabled');
    sliderLinkInner.classList.toggle('slider__link_disabled');
  });

});