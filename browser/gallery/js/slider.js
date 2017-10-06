'use strict';
const slide = document.getElementsByClassName('currentPhoto');

let step = 0;

var btn_prev = document.getElementById('prevPhoto');
var btn_next = document.getElementById('nextPhoto');

btn_prev.onclick = function() {
  // console.log(step);
  slide[step].style.display = 'none';
  step--
  if (step < 0) {
    step = slide.length - 1;
  }
  console.log(step);
  slide[step].style.display = 'block';
}

btn_next.onclick = function() {
  slide[step].style.display = 'none';
  step++
  if (step >= slide.length) {
    step = 0;
  };
  console.log(step);
  slide[step].style.display = 'block';  
}