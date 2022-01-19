var currentNumber = 3;
var timer = setInterval(decrementCount, 1000);

function decrementCount() {
  console.log(currentNumber);
  currentNumber--;

  if (currentNumber === 0) {
    console.log('Blast off!');
    clearInterval(timer);
  }
}
