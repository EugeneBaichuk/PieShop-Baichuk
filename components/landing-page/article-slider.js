'use strict';

const btnLeft = document.querySelector('.article__slider-btn');
const btnRight = document.querySelector('.article__button-right');
const sliderCard = document.querySelectorAll('.landing-card__articles');

let i = 0;
sliderCard[i].classList.add('landing-card__articles_disabled');


btnRight.addEventListener('click', e => {
  e.preventDefault();
  i++;
  switch (i) {
    case 0:
      addCard(i + 1);
      removeCard(i);
      firstCard(i + 1);
      secondCard(i + 2);
      thirdCard(i + 3);
      break;
    case 1:
      addCard(i - 1);
      removeCard(i + 2);
      firstCard(i - 1);
      secondCard(i);
      thirdCard(i + 1);
      break;
    case 2:
      addCard(i + 1);
      removeCard(i);
      firstCard(i + 1);
      secondCard(i - 2);
      thirdCard(i - 1);
      break;
    case 3:
      addCard(i - 1);
      removeCard(i - 2);
      firstCard(i - 1);
      secondCard(i);
      thirdCard(i - 3);
      break;
    case 4:
      i = 0;
      addCard(i + 1);
      removeCard(i);
      firstCard(i + 1);
      secondCard(i + 2);
      thirdCard(i + 3);
      break;
  }
});


btnLeft.addEventListener('click', e => {
  e.preventDefault();
  i--;

  switch (i) {
    case 0:
      addCard(i + 3);
      removeCard(i);
      firstCard(i + 1);
      secondCard(i + 2);
      thirdCard(i + 3);
      break;
    case -1:
      i = 3;
      addCard(i - 3);
      removeCard(i - 2);
      firstCard(i - 1);
      secondCard(i);
      thirdCard(i - 3);
      break;
    case 2:
      addCard(i - 1);
      removeCard(i);
      firstCard(i + 1);
      secondCard(i - 2);
      thirdCard(i - 1);
      break;
    case 1:
      addCard(i + 1);
      removeCard(i + 2);
      firstCard(i - 1);
      secondCard(i);
      thirdCard(i + 1);
      break;
    case 3:
      i = 3;
      addCard(i - 3);
      removeCard(i - 2);
      firstCard(i - 1);
      secondCard(i);
      thirdCard(i - 3);
      break;
  }

});

function removeCard(num) {
  sliderCard[num].classList.add('landing-card__articles_disabled');
}

function addCard(num) {
  sliderCard[num].classList.remove('landing-card__articles_disabled');
}

function firstCard(num) {
  sliderCard[num].style.order = 1;
}

function secondCard(num) {
  sliderCard[num].style.order = 2;
}

function thirdCard(num) {
  sliderCard[num].style.order = 3;
}