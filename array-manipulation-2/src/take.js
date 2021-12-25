/* exported take */

/* - make storage for new array (value = blank array)
   - make sure array length is greater than or equal to desired count
        - if length is greater than or equal to desired
          count, for each element in the array, go through each
          element and place into new storage until reached
          desired count
        - else, count is greater than array length,
          store value of original array into new array
   - give back shortened version of array */

function take(array, count) {
  var newArray = [];

  if (array.length > count) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  } else {
    newArray = array;
  }
  return newArray;
}
