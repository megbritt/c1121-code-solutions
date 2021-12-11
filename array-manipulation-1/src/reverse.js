/* exported reverse */

/* - make storage space for new reversed array
   - for each item in the array,
     go through each item of the storage backwards until last item of the storage
         - append each letter to storage space
   - give back new array
*/

function reverse(array) {
  var newArray = [];

  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
