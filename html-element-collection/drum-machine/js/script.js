'use strict';
const drumKit = document.getElementsByClassName('drum-kit__drum');
const audio = document.getElementsByTagName('audio');

for (let i = 0; i < audio.length; i++) {
  drumKit[i].onclick = function() {
  audio[i].play();        
  };
};