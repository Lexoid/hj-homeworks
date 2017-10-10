'use strict';

const wrapper = document.getElementsByClassName('wrapper-dropdown');

wrapper[0].onclick = function() {  
  if (wrapper[0].className !== 'active wrapper-dropdown') {
    wrapper[0].className = 'active wrapper-dropdown';
  } else {
    wrapper[0].className = 'wrapper-dropdown';
  };
}