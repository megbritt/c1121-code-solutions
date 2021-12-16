/* exported reverseWords */

/* - make storage for words that will be have their contiguous (next or together in sequence)
     string of space characters be replaced with an empty string
   - make storage space for resulting string
   - for each letter in words
        - if counter does not equal the length of the words - 1
                - split and reverse word and place into one string
                  and append a space
        - else counter does equal the length of the words - 1
                - split and reverse word and place into
                  one string
   - give back resulting string */

function reverseWords(string) {
  var words = string.match(/\S+/g);
  var result = '';
  for (var i = 0; i < words.length; i++) {
    if (i !== words.length - 1) {
      result += words[i].split('').reverse().join('') + ' ';
    } else {
      result += words[i].split('').reverse().join('');
    }
  }
  return result;
}
