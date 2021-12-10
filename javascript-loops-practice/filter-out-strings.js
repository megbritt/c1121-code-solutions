/* exported filterOutStrings */

function filterOutStrings(values) {

  var newArray = [];

  for (var i = 0; i < values.length; i++) {
    if (!isNaN(values[i]) && typeof values[i] !== 'string') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
