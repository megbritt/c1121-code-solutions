/* exported swapChars */

/* - make storage for new string
   - for each letter of the word
        - if letter index matches first index
            - switch value of first index to second index
        - if letter index matches second index
            - switch value of second index to first index
        - if letter index does not match either
          first index or second index, append letter to new string
   - give back new string
*/

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
