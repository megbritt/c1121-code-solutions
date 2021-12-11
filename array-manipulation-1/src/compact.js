/* exported compact */

/* - make storage space for new array
   - for each item in the array,
     go through each item of the array until last item of the array
         - add each item to storage space
   - give back new array
*/

function compact(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && !isNaN(array[i]) &&
      array[i] !== Math.sign(-0) && array[i] !== undefined && array[i] !== '' &&
      array[i] !== []) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
