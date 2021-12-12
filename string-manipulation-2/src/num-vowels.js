/* exported numVowels */

/* - make storage space for keeping track of how many vowels are in string
     (original value = 0)
   - for each letter in the word, check to see if letter is a vowel
        - if letter is a vowel, increment vowel counter by one
    - give back the number of vowels in string
*/

function numVowels(string) {
  var vowelCount = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' ||
      string[i] === 'E' || string[i] === 'i' || string[i] === 'I' ||
      string[i] === 'o' || string[i] === 'O' || string[i] === 'u' ||
      string[i] === 'U') {
      vowelCount++;
    }
  }
  return vowelCount;
}
