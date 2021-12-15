function handleFocus(event) {
  console.log('focus was fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('input event was fired');
  console.log('event.target.name', event.target.name);
}

function handleKeyDown(event) {
  console.log('keydown event was fired');
  $username.textContent += event;
  console.log('$username.textContent', $username.textContent);
}

var $username = document.querySelector('#user-name');
$username.addEventListener('focus', handleFocus);
$username.addEventListener('blur', handleBlur);
$username.addEventListener('input', handleInput);
$username.addEventListener('keydown', handleKeyDown);

var $userEmail = document.querySelector('#user-email');
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

var $userMessage = document.querySelector('#user-message');
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
