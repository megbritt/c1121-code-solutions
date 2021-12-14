/* exported reverseWord */

/* - make storage space for new reversed word
   - for each letter in the word,
     go through each letter of the word backwards until last letter of the word
         - append each letter to storage space
   - give back new word
*/

function reverseWord(word) {
  var newWord = '';

  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
