/* exported unique */

/* - make storage for items
   - for each item in array
       - check if item in the original array is not
         already included in the new array
             - if item in original array is not
               already included in the new raay
                    - put item into new array
   - give back new array */

function unique(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
