/* exported titleCase */

/* - make storage for lowercased words
   - make storage space for list of lowercased words, separated by spaces
   - make storage space for corrected title (original value = '')
   - make storage space for index of corrected title (original value = -1)
   - make storage space for a final corrected title, if one of the words
     in the title has a dash character in it (-)
   - capitalize the first letter in the first word, as it always needs to be
     capitalized regardless of what the word is
   - for each word onward after the first (second word onward in the list)
        - if the word is not a common preposition, a, the, javascript, or api
            - capitalize the first letter in the word and append the rest of
              the letters in the word
        - if the word is javascript
            - make sure it has the right casing by making the value of the word
              "JavaScript"
        - if the word is api
            - make sure it has the right casing by making the value of the word
              "API"
        - if the word we are currently on is "an" and the word previously before it
          was a colon (:)
            - capitalize the letter an to be "An"
        - if the word we are currently on is "the" and the word previously before it
          was a colon (:)
            - capitalize the letter the to be "The"
   - join each corrected word together to become a single string. each word
     will be separated by spaces
   - make sure if the word JavaScript was the first word in the title to replace
     "Javascript" with "JavaScript"
   - make sure if the word API was the first word in the title to replace
     "Api" with "API"
   - store the index of where the dash character (-) is, if there is a dash character
     in one of the words
          - if there is no dash character in one of the words, the storage space for the
            index will give back -1 and we can give back the corrected title
          - if there is a dash character in one of the words, the storage space for the
            index will give back another number than -1, which then means at
            aforementioned index
                - we have a substring from index 0 to aforementioned index of dash character
                  concatenated with the dash character itself which is then concatenated
                  with the capitalized letter succeeding it which is then concatenated with
                  the substring ater capitalized letter onward
*/

function titleCase(title) {
  var lowerCasedWord = title.toLowerCase();
  var eachWord = lowerCasedWord.split(' ');
  var correctedTitle = '';
  var index = -1;
  var correctedTitleFinal = '';

  eachWord[0] = eachWord[0].charAt(0).toUpperCase() + eachWord[0].substr(1);

  for (var i = 1; i < eachWord.length; i++) {
    if (eachWord[i] !== 'a' && eachWord[i] !== 'an' && eachWord[i] !== 'and' &&
        eachWord[i] !== 'as' && eachWord[i] !== 'at' && eachWord[i] !== 'but' &&
        eachWord[i] !== 'by' && eachWord[i] !== 'for' && eachWord[i] !== 'in' &&
        eachWord[i] !== 'nor' && eachWord[i] !== 'of' && eachWord[i] !== 'on' &&
        eachWord[i] !== 'or' && eachWord[i] !== 'per' && eachWord[i] !== 'the' &&
        eachWord[i] !== 'to' && eachWord[i] !== 'javascript' && eachWord[i] !== 'api') {

      eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].substr(1);

    }

    if (eachWord[i] === 'javascript') {
      eachWord[i] = 'JavaScript';
    }

    if (eachWord[i] === 'api') {
      eachWord[i] = 'API';
    }

    if (eachWord[i] === 'an' && eachWord[i - 1][eachWord[i - 1].length - 1] === ':') {
      eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].substr(1);
    }

    if (eachWord[i] === 'the' && eachWord[i - 1][eachWord[i - 1].length - 1] === ':') {
      eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].substr(1);
    }
  }

  correctedTitle = eachWord.join(' ');

  correctedTitle = correctedTitle.replace('Javascript', 'JavaScript');
  correctedTitle = correctedTitle.replace('Api', 'API');

  index = correctedTitle.indexOf('-');

  if (index === -1) {
    return correctedTitle;
  }

  correctedTitleFinal = correctedTitle.substring(0, index) + '-' + correctedTitle.charAt(index + 1).toUpperCase() + correctedTitle.substring(index + 2);
  return correctedTitleFinal;
}
