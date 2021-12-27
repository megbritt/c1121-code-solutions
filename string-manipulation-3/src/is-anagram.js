/* exported isAnagram */

/* - make storage to store first lowercased word removes all space
     characters
   - make storage to store second lowercased word removes all space
     characters
   - make storage to store first lowercased word sorted by letter and make that
     into one string
   - make storage to store second lowercased word sorted by letter and make that
     into one string

   - if first edited string is the same as second edited string
        - give back true
   - else, first edited string is different from second edited string
        - give back false */

function isAnagram(firstString, secondString) {

  var newFirstString = firstString.replaceAll(' ', '');
  var newSecondString = secondString.replaceAll(' ', '');

  var str1 = newFirstString.split('').sort().join('');
  var str2 = newSecondString.split('').sort().join('');

  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}
