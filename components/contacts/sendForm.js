const form = document.querySelector('.contacts__form');

console.dir(form.elements);

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   let data = {};
//   for (let {
//       name,
//       value
//     } of form.elements) {
//     if (name && data[name] != "" && data[name] != " ") {
//       data[name] = value;
//     }
//   }
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify(data)
//     })
//     .then(response => {
//       if (response.status === 200 || response.status === 201) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
//     .then(data => {
//       alert('данные успешно сохранены!');
//       form.reset();
//     })
//     .catch(error => {
//       console.dir(error);
//     });
// });