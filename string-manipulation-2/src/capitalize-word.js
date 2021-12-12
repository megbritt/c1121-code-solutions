/* exported capitalizeWord */

/* - storage space for the changed word
   - make sure original word is not JavaScript
      - if original word is not JavaScript, for each letter in the word
            - make sure first letter is capitalized
                  - if first letter is not capitalized
                    we capitalize it
            - if letter is capitalized but is not the
              first letter, uncapitalize aforementioned
              letter, and add that letter to the storage
              space for the changed word
      - if original word is JavaScript
            - make sure first letter and fifth letter are capitalized
                  - if first or fifth letter is not capitalized
                    we capitalize it
            - if letter is capitalized but is not the
              first letter or fifth letter in JavaScript,
               uncapitalize aforementioned letter, and add that letter
               to the storage space for the changed word
  - give back correctly capitalized word
*/

function capitalizeWord(word) {
  var capitalizedString = '';
  var javascript = 'JavaScript';
  var copyWord = word;

  if (copyWord.toLowerCase() !== javascript.toLowerCase()) {
    for (var i = 0; i < word.length; i++) {
      if (i === 0) {
        capitalizedString = copyWord[0].toUpperCase();
      } else {
        capitalizedString += copyWord[i].toLowerCase();
      }
    }
  } else {
    for (var j = 0; j < word.length; j++) {
      if (j === 0 || j === 4) {
        capitalizedString += copyWord[j].toUpperCase();
      } else {
        capitalizedString += copyWord[j].toLowerCase();
      }
    }
  }
  return capitalizedString;
}
