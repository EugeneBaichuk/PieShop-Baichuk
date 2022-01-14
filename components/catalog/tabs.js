'use strict';

const allBtn = document.getElementById('all');
const arrow = allBtn.querySelector('.button__triangle');
const fatBtn = document.getElementById('fat');
const pieBtn = document.getElementById('pie');
const sweetBtn = document.getElementById('sweet');
const allButtons = document.querySelectorAll('.catalog-nav__button');
const fatCards = document.querySelectorAll('.card-wrapper__fat-card');
const sweetCards = document.querySelectorAll('.card-wrapper__sweet-card');
const pieCards = document.querySelectorAll('.card-wrapper__pie-card');
const allCards = document.querySelectorAll('.card-wrapper__card');

allBtn.addEventListener('click', function () {
  showMobileBurger();

  function showMobileBurger() {
    showBtn(fatBtn);
    showBtn(pieBtn);
    showBtn(sweetBtn);
  }

  function showBtn(btn) {
    btn.classList.toggle('catalog-nav__button_disabled');
    arrow.classList.toggle('button__triangle_dir_up');
  }
});

workTabBtn(allCards, allBtn);
workTabBtn(fatCards, fatBtn);
workTabBtn(pieCards, pieBtn);
workTabBtn(sweetCards, sweetBtn);

function workTabBtn(cards, btn) {
  btn.addEventListener('click', () => {
    hideAllCards();
    showCards(cards, btn);
  });
}

function hideAllCards() {
  allButtons.forEach(btn => {
    btn.classList.remove('catalog-nav__button_active');
  });
  allCards.forEach(card => {
    card.style.display = 'none';
  });
}

function showCards(cards, btn) {
  cards.forEach(card => {
    card.style.display = 'block';
  });
  btn.classList.add('catalog-nav__button_active');
}