/* exported isLowerCased */

/* - for each letter in the word, one at a time
     go through each letter to make sure it is
     a fully lowercased word (each letter in the word
     is lowercased).
        - if there is an uppercased letter, give back false
        - if there are no uppercased letters, give back true
*/

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] >= 'A' && word[i] <= 'Z') {
      return false;
    }
  }
  return true;
}
