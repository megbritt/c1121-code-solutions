var $modalButton = document.querySelector('.open-modal-button');
var $noButton = document.querySelector('.red-btn');
var $hidden = document.querySelector('.hidden');

$modalButton.addEventListener('click', handleClick);
$noButton.addEventListener('click', handleClickNo);

function handleClick(event) {
  $hidden.className = 'show';
}

function handleClickNo(event) {
  $hidden.className = 'hidden';
}
