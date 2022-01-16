const boxes = document.querySelectorAll('.stages__img');

window.addEventListener('scroll', slideBoxes);

slideBoxes();

function slideBoxes() {
  const triggerBottom = window.innerHeight * 0.8;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('stages__img_show');
    } else {
      box.classList.remove('stages__img_show');
    }
  });
}