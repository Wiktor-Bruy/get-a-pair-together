'use strict';

let timeStart;

function createArray() {
  const gameArray = [];
  for (let i = 1; i <= 6; i++) {
    const obj = {
      src: `./images/${i}.jpg`,
      rang: Math.ceil(Math.random() * 100),
      alt: 'Game image',
    };

    gameArray.push(obj);
  }
  for (let i = 1; i <= 6; i++) {
    const obj = {
      src: `./images/${i}.jpg`,
      rang: Math.ceil(Math.random() * 100),
      alt: 'Game image',
    };

    gameArray.push(obj);
  }
  return gameArray.toSorted((a, b) => a.rang - b.rang);
}

function game() {
  timeStart = Date.now();
  const gameGal = document.querySelector('.game-gallery');
  gameGal.innerHTML = '';
  const gameArray = createArray();
  let gameImg = [];
  for (let { src, alt } of gameArray) {
    const item = document.createElement('li');
    item.classList.add('item');
    const fon = document.createElement('span');
    fon.classList.add('image-fon');
    item.append(fon);
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    item.append(img);
    gameImg.push(item);
  }
  gameGal.append(...gameImg);
}

let img1;
let img2;
let count = 6;
let count2 = 1;
function setImg(event) {
  if (event.target.tagName === 'SPAN') {
    if (count2 === 1) {
      const span = event.target;
      img1 = span.nextElementSibling;
      span.classList.toggle('none');
      count2 = 2;
    } else if (count2 === 2) {
      const span = event.target;
      img2 = span.nextElementSibling;
      span.classList.toggle('none');
      count2 = 1;
      if (img1.src === img2.src) {
        count--;
      }
      setTimeout(() => {
        if (img1.src === img2.src) {
          const li1 = img1.parentElement;
          li1.style.visibility = 'hidden';
          const li2 = img2.parentElement;
          li2.style.visibility = 'hidden';
        } else {
          const span1 = img1.previousElementSibling;
          span1.classList.remove('none');
          const span2 = img2.previousElementSibling;
          span2.classList.remove('none');
        }
      }, 500);
      if (count === 0) {
        count = 6;
        setTimeout(() => {
          const sectionGame = document.querySelector('.game');
          sectionGame.classList.add('over');
          const winWindow = document.querySelector('.win');
          winWindow.classList.add('true');
          const timeEnd = Date.now();
          const timeGame = Math.ceil((timeEnd - timeStart) / 1000);
          const text = document.querySelector('.js-time-out');
          text.textContent = `Час гри: ${timeGame} секунд.`;
        }, 500);
      }
    }
  }
}

function rtyAgain() {
  setTimeout(() => {
    const sectionGame = document.querySelector('.game');
    sectionGame.classList.remove('over');
    const winWindow = document.querySelector('.win');
    winWindow.classList.remove('true');
    game();
  }, 500);
}

document.addEventListener('DOMContentLoaded', game);

const gameGal = document.querySelector('.game-gallery');
gameGal.addEventListener('click', setImg);

const btnEl = document.querySelector('.try-btn');
btnEl.addEventListener('click', rtyAgain);
