var $circle = document.querySelector('input');
var $bg = document.querySelector('body');

function handleClick(event) {

  $circle.classList.toggle('circle-on');
  $circle.classList.toggle('circle-off');

  $bg.classList.toggle('yellow-bg');
  $bg.classList.toggle('black-bg');

}

$circle.addEventListener('click', handleClick);
