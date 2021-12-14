/* exported isUpperCased */

/* - make storage space for uppercased version of word
   - check to see if uppercased version of word matches original word
       - if the two words match, give back true
       - if the two words do not match, give back false
*/

function isUpperCased(word) {
  var newWord = word.toUpperCase();

  if (word === newWord) {
    return true;
  }
  return false;
}
