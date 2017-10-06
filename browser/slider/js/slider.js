'use strict';
const slide = document.getElementsByClassName('slider');

let step = 0;

setInterval(() => {
  slide[step].style.display = 'none';
  step++
  if (step >= slide.length) {
    step = 0;
  }
  slide[step].style.display = 'block';
}, 5000);