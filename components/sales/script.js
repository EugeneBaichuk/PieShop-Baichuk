'use strict';

// Timer
const now = new Date();
const deadline = (`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()+2}`); // текущая дата + 2 дн

function getTimeRemaining(endtime) { // ф-ция получающая оставшееся время в таймере
  const t = Date.parse(endtime) - Date.parse(new Date()), // .parce - получить количество милисек от 1970 года
    // получаем разницу между deadline и текущей датой в милисекундах 
    days = Math.floor(t / (1000 * 60 * 60 * 24)), // конвертируем миллисек в дни, часы итд
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);
  return { // возвращаем значение в виде объекта
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function getZero(num) { // ф-ция для подставления 0 перед числом если таймер меньше 10
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) { // подставляем значение таймера на страницу
  const timer = document.querySelector(selector), // получаем элементы со страницы
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000); // устанавливаем обновление таймера каждую секунду
  updateClock();

  function updateClock() { //меняем значение на странице на значения таймера
    const t = getTimeRemaining(endtime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}
setClock('.timer', deadline); //подставляем класс таймера на странице и нужного дедлайна