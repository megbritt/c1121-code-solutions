/* exported compact */

/* - make storage space for new array
   - for each item in the array,
     go through each item of the array until last item of the array
         - if item is not a falsy value, add each item to new storage space
   - give back new storage space
*/

function compact(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
