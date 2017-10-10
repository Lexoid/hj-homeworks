const play = document.getElementsByClassName('fa-play');
const pause = document.getElementsByClassName('fa-pause');
const stop = document.getElementsByClassName('fa-stop');
const back = document.getElementsByClassName('fa-backward');
const next = document.getElementsByClassName('fa-forward');
const audio = document.getElementsByTagName('audio');
const mediaplayer = document.getElementsByClassName('mediaplayer');
const title = document.getElementsByClassName('title');
let song = 0;

const songs = [
  {
    title: 'LA Chill Tour',
    src: 'mp3/la-chill-tour.mp3'
  },
  {
    title: 'LA Fusion Jam',
    src: 'mp3/la-fusion-jam.mp3'
  },
  {
    title: 'This is it band',
    src: 'mp3/this-is-it-band.mp3'
  }
];

audio[0].src = songs[song].src;

play[0].onclick = function() {
  audio[0].play();
  mediaplayer[0].className = 'play mediaplayer';
};
pause[0].onclick = function() {
  audio[0].pause();
  mediaplayer[0].className = 'mediaplayer';
};
stop[0].onclick = function() {
  audio[0].pause();
  audio[0].currentTime = 0;      
  mediaplayer[0].className = 'mediaplayer';
};
back[0].onclick = function() {
  song--;
  if (song < 0) {
    song = songs.length - 1;
  }
  audio[0].pause();
  mediaplayer[0].className = 'mediaplayer';
  audio[0].src = songs[song].src;
  title[0].title = songs[song].title;
  audio[0].play();
  mediaplayer[0].className = 'play mediaplayer';
};
next[0].onclick = function() {
  song++;
  if (song < songs.length) {
    audio[0].src = songs[song].src;
    audio[0].play();
    mediaplayer[0].className = 'play mediaplayer';
    title[0].title = songs[song].title;
  } else {
    song = 0;
    audio[0].src = songs[song].src;
    audio[0].play();
    mediaplayer[0].className = 'play mediaplayer';
    title[0].title = songs[song].title;
  }
};