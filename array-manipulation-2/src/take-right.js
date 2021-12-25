/* exported takeRight */

/* - make storage for new array (value = blank array)
   - make sure length of array is longer than the count number
      - if length of array is longer than the count number,
            - for each item starting with count onward until
              the length of the array, add new item to the new array
      - if length is not longer than count number, then assign
        the value of array to the new array

   - give back shortened rhs (right hand side) version of array */

function takeRight(array, count) {
  var newArray = [];

  if (array.length > count) {
    for (var i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    newArray = array;
  }
  return newArray;
}
