/* exported truncate */

/* - make storage for new string (value = blank string)
   - make sure string is not blank
      - if string is not blank, make sure string length is
        greater than or equal to desired truncated length
            - if length is greater than or equal to desired
              truncated length, for each word, go through each
              letter and place into new storage until reached
              desired length
            - else, length is greater than string length,
              store value of original string into new string
      - if string is blank, do nothing for now
   - append ellipsis to end of new string
   - give back shortened version of string with an ellipsis */

function truncate(length, string) {
  var newString = '';

  if (string !== '') {
    if (string.length >= length) {
      for (var i = 0; i < length; i++) {
        newString += string[i];
      }
    } else {
      newString = string;
    }
  }
  newString += '...';
  return newString;
}
