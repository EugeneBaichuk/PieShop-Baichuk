const form = document.querySelector('.contacts__form');
const checkbox = document.querySelector('.contacts__checkbox');

form.addEventListener('submit', event => {
  event.preventDefault();
  let data = {};
  for (let {
      name,
      value
    } of form.elements) {
    if (name) {
      data[name] = value;
    }
  }

  if (checkbox.checked) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(() => {
        alert(`
        данные успешно сохранены!
        Имя: ${data.name}
        Телефон: ${data.tel}
        `);
        form.reset();
      })
      .catch(error => {
        console.dir(error);
      });
  } else {
    alert('Установите флажок "Cогласие на обработку персональных данных"');
  }
});