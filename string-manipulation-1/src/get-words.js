/* exported getWords */

/* - make storage for separated words
   - make temporary storage for a single word
   - make sure string is not blank
        - if string is blank, give back empty storage
        - if string is not blank, then
            - for each word make sure each character is not a space
                    - if the character is not a space, then append the
                      character to the temporary storage for a single word
                    - if not, add the word to the storage
                    - reset temporary word to blank
            - add the final word to storage to completely store all the words
   - give back storage for separated words
*/

function getWords(string) {
  var wordArray = [];
  var word = '';

  if (string !== '') {
    for (var i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        word += string[i];
      } else if (string[i] === ' ') {
        wordArray.push(word);
        word = '';
      }
    }
    wordArray.push(word);
  }
  return wordArray;
}

/* Alternate Solution (My First Solution):

      - first, make sure the string is not empty
      - if the string is empty, give back an
        empty storage space
      - if the string is not empty, each word
        separated by a space will be put into
        storage
             - give back storage space

*/

/* Alternate Solution (My First Solution):

function getWords(string) {
  if (string !== '') {
    return string.split(' ');
  } else {
    return [];
  }
}

*/
