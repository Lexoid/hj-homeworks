const allBoard = document.querySelectorAll('.gallery-nav a');
const imgActive = document.querySelector('.gallery-view');

for (var i = 0; i < allBoard.length; i++) {
  allBoard[i].addEventListener('click', function (element) {
      select(element);
  });
}

function select(element) {
  element.preventDefault();
  for (let i = 0; i < allBoard.length; i++) {
      allBoard[i].classList.remove('gallery-current');
  }
  element.currentTarget.classList.add('gallery-current');
  imgActive.src = element.currentTarget.href;    
}