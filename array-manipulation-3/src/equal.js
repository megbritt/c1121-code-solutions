/* exported equal */

/* - check to see if the length of the first array is the
     same as the length of the second array
         - if their lengths are the not the same, give back false
   - for each item in the array
         - check if an item in one array is not the same as the other
              - if even one item in one array is not the same as the other
                   - give back false
   - otherwise, the arrays are equal, so give back true

*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
