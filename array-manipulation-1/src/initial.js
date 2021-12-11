/* exported initial */

/* - make storage for first item all the way until second to last item
   - for each item
      - place every item onward into new storage
   - give back new storage
*/

function initial(array) {
  var newArray = [];

  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
