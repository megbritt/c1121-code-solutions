/* exported reverseWords */

/* - make storage for each letter
   - make storage that is a reversed array
   - make storage for resulting string (initial value = '')
   - put each item in reversed array also in reverse
   - turn each item  in second storage into one full string
   - give back resulting string */

function reverseWords(string) {
  var array = [];
  var arrayReversed = string.split('').reverse().join('').split(' ');
  var newString = '';

  for (var i = arrayReversed.length - 1; i >= 0; i--) {
    array.push(arrayReversed[i]);
  }

  newString = array.join(' ');
  return newString;
}
