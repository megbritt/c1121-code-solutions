/* exported isVowel */

/* - First check if the character is uppercased or lowercased
   - Then check to see if the letter is a vowel
        - if it is a vowel, give back true
        - if it is not a vowel, give back false
*/

function isVowel(char) {
  if (char >= 'A' && char <= 'Z') {
    if (char === 'A' || char === 'E' || char === 'I' || char === 'O' ||
    char === 'U') {
      return true;
    }
  } else if (char >= 'a' && char <= 'z') {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' ||
      char === 'u') {
      return true;
    }
  }
  return false;
}
