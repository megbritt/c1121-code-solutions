/* exported capitalizeWords */

/* - storage space for the changed word
   - put value of string into new storage space
   - for each letter in word,
        - if the letter is the first letter or the character
          that proceeds the letter was a space character
              - uppercase letter and append to new string
        - if the letter was neither the first letter nor
          the character that proceeds the letter a space character
              - lowercase letter and append to new string
  - give back correctly capitalized word
*/

function capitalizeWords(string) {
  var capitalizedString = '';
  var copyWord = string;

  for (var i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === ' ') {
      capitalizedString += copyWord[i].toUpperCase();
    } else {
      capitalizedString += copyWord[i].toLowerCase();
    }
  }
  return capitalizedString;
}
