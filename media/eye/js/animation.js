'use strict';

const pupil = document.querySelector('.big-book__pupil');
const pupilW = pupil.clientWidth;
const pupilH = pupil.clientHeight;
const pupilR = pupil.clientWidth / 2;

const centerInEyeX = pupil.offsetLeft + pupilR;
const centerInEyeY = pupil.offsetTop + pupilR;

const offsetPupil = pupil.getBoundingClientRect()
const centerAbsX = offsetPupil.x + pupilR;
const centerAbsY = offsetPupil.y + pupilR;

const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;

document.addEventListener('mousemove', event => {

});
