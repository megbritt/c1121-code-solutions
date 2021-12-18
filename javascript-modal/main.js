var $modalBtn = document.querySelector('.modal-btn');
var $modal = document.querySelector('.modal');
var $closeBtn = document.querySelector('.red-btn');

$modalBtn.addEventListener('click', handleClick);
$closeBtn.addEventListener('click', handleClick2);

function handleClick(event) {
  $modal.style.display = 'block';
}

function handleClick2(event) {
  $modal.style.display = 'none';
}
