/* exported difference */
/* - make storage for new array
   - for each element in the first array
       - check to see if it (current element) of the first array is not included in
         the second array
             - if first array's current element is not in the second array
                     - put the element into the storage
   - for each element in the second array
       - check to see if it (current element) of the second array is not included in
         the first array
             - if second array's current element is not in the first array
                     - put the element into the storage
   - give back new array */

function difference(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArray.push(second[j]);
    }
  }

  return newArray;
}
