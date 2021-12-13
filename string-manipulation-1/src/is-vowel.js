/* exported isVowel */

/* - make storage space for uppercased version of letter
   - then check to see if the letter is a vowel
        - if it is a vowel, give back true
        - if it is not a vowel, give back false
*/

function isVowel(char) {
  var upperCaseChar = char.toUpperCase();

  if (upperCaseChar >= 'A' && upperCaseChar <= 'Z') {
    if (upperCaseChar === 'A' || upperCaseChar === 'E' || upperCaseChar === 'I' || upperCaseChar === 'O' ||
    upperCaseChar === 'U') {
      return true;
    }
  }
  return false;
}
