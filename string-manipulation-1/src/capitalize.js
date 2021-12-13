/* exported capitalize */

/* - storage space for the changed word
   - capitalize the first letter in the word
   - for each letter after the first letter in the word
      - lowercase the rest of the letters
  - give back capitalized word
*/

function capitalize(word) {
  var capitalizedString = '';

  capitalizedString = word[0].toUpperCase();

  for (var i = 1; i < word.length; i++) {
    capitalizedString += word[i].toLowerCase();
  }
  return capitalizedString;
}
