'use strict';

const header = document.querySelector('.header'),
  burgerMenu = header.querySelector('.header__burger-menu-link'),
  burgerMenuBackground = header.querySelector('.header__burger-menu-background'),
  burgerMenuClosed = header.querySelectorAll('.nav_disabled'),
  closeButton = header.querySelector('.nav__burger-close-button');

burgerMenu.addEventListener("click", () => {
  toggleMenu(burgerMenuClosed);
});

closeButton.addEventListener("click", () => {
  toggleMenu(burgerMenuClosed);
});

burgerMenuBackground.addEventListener("click", () => {
  toggleMenu(burgerMenuClosed);
});

function toggleMenu(item) {
  item.forEach((e) => {
    e.classList.toggle('nav_disabled');
  });
}