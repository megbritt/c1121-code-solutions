/* exported drop */

/* - make storage for new array (value = blank array)
   - make sure array is not blank
      - make sure array length is greater than desired count
            - if length is greater than or equal to desired
              count, for each element starting at desired count
              number in the original array, go through each
              element and place into new storage until reached
              every element in the array
            - else, count is greater than array length,
              store value of original array into new array
   - give back shortened version of array */

function drop(array, count) {
  var newArray = [];

  if (array.length > count) {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    newArray = array;
  }

  return newArray;
}
