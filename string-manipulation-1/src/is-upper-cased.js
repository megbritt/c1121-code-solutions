/* exported isUpperCased */

/* - for each letter in the word, one at a time
     go through each letter to make sure it is
     a fully uppercased word (each letter in the word
     is uppercased).
        - if there is a lowercased letter, give back false
        - if there are no lowercased letters, give back true
*/

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] >= 'a' && word[i] <= 'z') {
      return false;
    }
  }
  return true;
}
