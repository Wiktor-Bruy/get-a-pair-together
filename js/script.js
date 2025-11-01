'use strict';

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
  gameArray = gameArray.toSorted((a, b) => a.rang - b.rang);
  return gameArray;
}

function game() {
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

function setImg(event) {
  console.log(event.target);
  if (event.target.tagName === 'SPAN') {
    const span = event.target;
    span.classList.toggle('none');
  }
}

document.addEventListener('DOMContentLoaded', game);
const gameGal = document.querySelector('.game-gallery');
gameGal.addEventListener('click', setImg);
