var $h1 = document.querySelector('h1');

function changeToHello() {
  $h1.textContent = 'Hello There';
}

setTimeout(changeToHello, 2000);
