/* exported zip */

/* - make storage to keep the length of the lesser array (initial value = null)
   - make storage for new array
   - check which array has less elements
        - if the first array has less elements than the second
               - assign value of the length of the first array into
                 storage for length
        - otherwise, the second array has less elements than the first
                - assign value of the length of the second array into
                  storage for length
   - for each element in both the first and second array
        - put the element of the first and the correspending
          element of the second in a new subarray which goes into
          the storage for the new array
   - give back new array */

function zip(first, second) {
  var length = null;
  var newArray = [];

  if (first.length < second.length) {
    length = first.length;
  } else {
    length = second.length;
  }

  for (var i = 0; i < length; i++) {
    newArray.push([].concat(first[i], second[i]));
  }

  return newArray;
}
