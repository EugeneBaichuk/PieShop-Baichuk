'use strict';

const modalBtn = document.querySelectorAll('.card__btn');
const modal = document.querySelector('.modal-overlay');
const modalCloseBtn = modal.querySelector('.modal-dialog__close-btn');
const body = document.querySelector('body');

modalBtn.forEach(item => item.addEventListener('click', function () {
  modal.classList.remove('modal-overlay_closed');
  document.body.style.overflow = 'hidden';
  let modalImg = modal.querySelector('.modal-dialog__img');
  let modalHeader = modal.querySelector('.modal-dialog__page-header');
  let modalPrice = modal.querySelector('.modal-dialog__price');
  this.item = item;
  const cardImg = item.parentElement.parentElement.parentElement.firstElementChild;
  const cardHeader = item.parentElement.parentElement.firstElementChild;
  const cardPrice = item.previousElementSibling;
  modalImg.src = cardImg.src;
  modalHeader.innerHTML = cardHeader.innerHTML;
  modalPrice.innerHTML = cardPrice.innerHTML;
}));

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-dialog__close-btn')) {
    modal.classList.add('modal-overlay_closed');
    document.body.style.overflow = 'auto';
  }
});