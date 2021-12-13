/* exported tail */

/* - make storage for second item onward
   - for each item
      - place every item onward into new storage
   - give back new storage
*/

function tail(array) {
  var newArray = [];

  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
