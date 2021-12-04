const burgerMenu = document.querySelector(".burger-menu"),
  burgerMenuClosed = document.querySelector(".nav-closed"),
  closeButton = document.querySelector(".close-button");

burgerMenu.addEventListener("click", () => {
  toggleMenu(burgerMenuClosed);
});

closeButton.addEventListener("click", () => {
  toggleMenu(burgerMenuClosed);
});

function toggleMenu(item) {
  if (item.classList.contains("nav-closed")) {
    item.classList.remove('nav-closed');
  } else {
    item.classList.add('nav-closed');
  }
}