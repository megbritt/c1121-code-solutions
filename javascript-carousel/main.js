var imageArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var index = 0;
var intervalId = setInterval(moveAutomatically, 3000);

var $buttonContainer = document.querySelector('.button-container');
var $carousel = document.querySelector('.carousel');
var $img = document.querySelector('img');

function changeImage(direction) {
  if (direction === 'right') {
    if (index >= imageArray.length - 1) {
      index = 0;
    } else {
      index++;
    }
  } else if (direction === 'left') {
    if (index === 0) {
      index = imageArray.length - 1;
    } else {
      index--;
    }
  }

  document.querySelector('.current').className = 'far fa-circle';
  document.getElementById(index).className = 'current fas fa-circle';

  $img.setAttribute('src', imageArray[index]);
}

function handleClick(event) {
  if (event.target.className === 'fas fa-chevron-right fa-4x') {
    clearInterval(intervalId);
    intervalId = setInterval(moveAutomatically, 3000);
    changeImage('right');

  } else if (event.target.className === 'fas fa-chevron-left fa-4x') {
    clearInterval(intervalId);
    intervalId = setInterval(moveAutomatically, 3000);
    changeImage('left');

  } else if (event.target.className === 'far fa-circle') {
    clearInterval(intervalId);
    intervalId = setInterval(moveAutomatically, 3000);
    document.querySelector('.current').className = 'far fa-circle';
    document.getElementById(event.target.id).className = 'current fas fa-circle';
    index = event.target.id;
    $img.setAttribute('src', imageArray[event.target.id]);
  }
}

function moveAutomatically() {
  changeImage('right');
}

$buttonContainer.addEventListener('click', handleClick);
$carousel.addEventListener('click', handleClick);
