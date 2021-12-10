/* exported countdown */
function countdown(number) {

  var numArray = [];

  for (var i = number; i >= 0; i--) {
    numArray.push(i);
  }
  return numArray;
}
