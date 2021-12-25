/* exported isPalindromic */

/* - make storage for string without space characters
   - make storage to store half of the length of the string
   - assign value of string without space characters into new string storage
   - for each half of the word
     - go through each letter and make sure the corresponding
      letter is the same as the corresponding letter on the other side
             - if one letter does not match the other
                   - give back false
             - if every letter matches, give back true  */

function isPalindromic(string) {
  var newString = string.replaceAll(' ', '');
  var halfLength = Math.floor(string.length / 2);

  for (var i = 0; i < halfLength; i++) {
    if (newString[i] !== newString[newString.length - i - 1]) {
      return false;
    }
  }
  return true;
}
