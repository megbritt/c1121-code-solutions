/* exported filterOutStrings */

function filterOutStrings(values) {

  var newArray = [];

  for (var i = 0; i < values.length; i++) {
    if (!isNaN(values[i])) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
