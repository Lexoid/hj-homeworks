const nav = document.querySelector('nav');
const secret = document.querySelector('.secret');
var imputWord = [];

document.addEventListener('keydown', function (element) {
  combo(element);
});

function combo(element) {
  if (!element.altKey || !element.ctrlKey) {
    return;
  }
  switch (element.code) {
    case 'KeyT':
      nav.classList.toggle('visible');
      break;
  }
}

document.addEventListener('keydown', function (element) {
  easterEgg(element);
})

function easterEgg(element) {
  switch (element.keyCode) {
    case 89:
      if (imputWord == '') {
        imputWord.push(String.fromCharCode(element.keyCode).toLowerCase()) 
      } else {
        imputWord.splice(0);
      }
      break;
    case 84:
      if (imputWord[imputWord.length - 1] == 'y') {
        imputWord.push(String.fromCharCode(element.keyCode).toLowerCase())
      } else {
        imputWord.splice(0);
      }
      break;
    case 78:
      if (imputWord[imputWord.length - 1] == 't') {
        imputWord.push(String.fromCharCode(element.keyCode).toLowerCase())
      } else {
        imputWord.splice(0);
      }
      break;
    case 74:
      if (imputWord[imputWord.length - 1] == 'n' || imputWord[imputWord.length - 1] == 'k') {
        imputWord.push(String.fromCharCode(element.keyCode).toLowerCase())
      } else {
        imputWord.splice(0);
      }
      break;
    case 75:
      if (imputWord[imputWord.length - 1] == 'j') {
        imputWord.push(String.fromCharCode(element.keyCode).toLowerCase())
      } else {
        imputWord.splice(0);
      }
      break;
    case 85:
      if (imputWord[imputWord.length - 1] == 'j') {
        imputWord.push(String.fromCharCode(element.keyCode).toLowerCase())
      } else {
        imputWord.splice(0);
      }
      break;
    case 66:
      if (imputWord[imputWord.length - 1] == 'u') {
        imputWord.push(String.fromCharCode(element.keyCode).toLowerCase())
      } else {
        imputWord.splice(0);
      }
      break;
    case 90:
      if (imputWord[imputWord.length - 1] == 'b') {
        imputWord.push(String.fromCharCode(element.keyCode).toLowerCase())
      } else {
        imputWord.splice(0);
      }
      break;
  }

  if (imputWord.join('') == 'ytnjkjubz') {
    secret.classList.toggle('visible');
  }
};