const mainScroll = document.getElementById('scroll-top-btn');
const footerBtn = document.querySelectorAll('.footer__input');

footerBtn.forEach(btn => {
  btn.addEventListener('click', smoothScroll(btn, 'e-mail'));
});
smoothScroll(mainScroll, 'top');
window.addEventListener('scroll', showScrollBtn);

function showScrollBtn() {
  const trigger = document.documentElement.scrollTop;

  if (trigger > 300) {
    mainScroll.classList.add('scroll-btn_show');
  } else {
    mainScroll.classList.remove('scroll-btn_show');
  }
}

function smoothScroll(btn, scrollCheckpoint) {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById(scrollCheckpoint).scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  });
}