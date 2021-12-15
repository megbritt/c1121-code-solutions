/* exported ransomCase */

/* - make storage space for new string
   - make storage space to hold lowercased version of original word
   - store lowercase all letters of original word
     into new string in previous step
   - for every letter in the word
         - capitalize every other letter and append to first storage
         - append every other letter lower cased and append to first storage
   - give back new string  */

function ransomCase(string) {
  var newString = '';
  var lowercasedOriginal = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newString += lowercasedOriginal[i].toUpperCase();
    } else {
      newString += lowercasedOriginal[i];
    }
  }
  return newString;
}
