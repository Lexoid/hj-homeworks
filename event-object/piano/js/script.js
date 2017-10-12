const black = document.querySelectorAll('.black');
const white = document.querySelectorAll('.white');
const set = document.querySelector('.set');

black[0].addEventListener('click', function (element) {
    button(element, 'second.mp3');
});
black[1].addEventListener('click', function (element) {
    button(element, 'fourth.mp3');
});
white[0].addEventListener('click', function (element) {
    button(element, 'first.mp3');
});
white[1].addEventListener('click', function (element) {
    button(element, 'third.mp3');
});
white[2].addEventListener('click', function (element) {
    button(element, 'fifth.mp3');
});

function button(element, path) {
    if (element.altKey) {
        set.classList.remove('middle', 'lower');
        set.classList.add('higher');
        element.currentTarget.children[0].src = 'sounds/higher/' + path;
    } else if (element.shiftKey) {
        set.classList.remove('middle', 'higher');
        set.classList.add('lower');
        element.currentTarget.children[0].src = 'sounds/lower/' + path;
    } else {
        set.classList.remove('higher', 'lower');
        set.classList.add('middle');
        element.currentTarget.children[0].src = 'sounds/middle/' + path;
    }
    element.currentTarget.children[0].play();
}
