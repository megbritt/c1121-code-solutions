/* exported isLowerCased */

/* - make storage space for lowercased version of word
   - check to see if lowercased version of word matches original word
       - if the two words match, give back true
       - if the two words do not match, give back false
*/

function isLowerCased(word) {
  var newWord = word.toLowerCase();

  if (word === newWord) {
    return true;
  }
  return false;
}
