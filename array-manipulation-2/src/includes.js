/* exported includes */

/* - storage space for whether we find desired value in the array
   - for each element in the array, check to see if there is an
     element in the array that matches the given value
        - if there is an element in the array that matches
          given value, give back true
        - if there is no element in the array that matches,
          give back false  */

function includes(array, value) {
  var isFound = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      isFound = true;
    }
  }
  return isFound;
}
