const mainScroll = document.querySelector('.scroll-btn');


mainScroll.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('top').scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  });
});

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const trigger = document.documentElement.scrollTop;

  if (trigger > 300) {
    mainScroll.classList.add('scroll-btn_show');
  } else {
    mainScroll.classList.remove('scroll-btn_show');
  }
}