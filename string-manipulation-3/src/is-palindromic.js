/* exported isPalindromic */

/* - make storage to store all non-alphanumeric characters
   - make storage to store lowercased word removes all non-alphanumeric
     characters
   - make storage to store how long string is
   - for each half of the word
        - go through each letter and make sure the corresponding
          letter is the same as the corresponding letter on the other side
                - if one letter does not match the other
                      - give back false
                - if every letter matches, give back true  */

function isPalindromic(string) {
  var regex = /[^A-Za-z0-9]/g;
  var newString = string.toLowerCase().replace(regex, '');
  var length = newString.length;

  for (var i = 0; i < length / 2; i++) {
    if (newString[i] !== newString[length - 1 - i]) {
      return false;
    }
  }
  return true;
}
