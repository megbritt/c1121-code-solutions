/* exported flatten */

/* - make storage for new list of items
   - for each subarray (or lackthereof) in the array
         - check if if it is a subarry
               - if it is a subarray, append the contents of the array into
                 the new array
               - otherwise simply append the content into the main new array instead
    - give back new array */

function flatten(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
