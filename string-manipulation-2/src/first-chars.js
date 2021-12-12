/* exported firstChars */

/* - make storage for new string (value = blank string)
   - make sure string is not blank
      - if string is not blank, make sure string length is
        greater than or equal to desired truncated length
            - if length is greater than or equal to desired
              truncated length, for each word, go through each
              letter and place into new storage until reached
              desired length
             - else, length is greater than string length, meaning
               for each word, go through each letter and place
               into storage until reached every letter in the string
      - if string is blank, return an empty string
   - give back shortened version of string */

function firstChars(length, string) {
  var newString = '';

  if (string !== '') {
    if (string.length >= length) {
      for (var i = 0; i < length; i++) {
        newString += string[i];
      }
    } else {
      for (var j = 0; j < string.length; j++) {
        newString += string[j];
      }
    }
  }
  return newString;
}
