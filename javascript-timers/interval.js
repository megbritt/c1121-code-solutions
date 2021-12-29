var currentNumber = 4;
var timer = setInterval(decrementToEarth, 1000);
var $h1 = document.querySelector('h1');

function decrementToEarth() {
  currentNumber--;
  $h1.textContent = currentNumber;

  if (currentNumber === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
}
