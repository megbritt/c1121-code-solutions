/* exported capitalize */

/* - storage space for the changed word
   - for each letter in the word
        - make sure first letter is capitalized
              - if first letter is not capitalized
                we capitalize it
        - if letter is capitalized but is not the
          first letter, uncapitalize aforementioned
          letter, and add that letter to the storage
          space for the changed word
  - give back capitalized word
*/

function capitalize(word) {
  var capitalizedString = '';

  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalizedString = word[0].toUpperCase();
    } else {
      capitalizedString += word[i].toLowerCase();
    }
  }
  return capitalizedString;
}
