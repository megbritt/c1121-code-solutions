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
  console.log('value of', event.target.name + ':' + event.target.value);
}

var $username = document.querySelector('#user-name');
$username.addEventListener('focus', handleFocus);
$username.addEventListener('blur', handleBlur);
$username.addEventListener('input', handleInput);

var $userEmail = document.querySelector('#user-email');
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

var $userMessage = document.querySelector('#user-message');
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
