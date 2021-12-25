/* exported union */

/* - make storage for new array (initial value = [])
   - make storage for temporary array, which will
     be originally assigned the value of the first
     array and then the value of the second array

   - for each element in the temporary array
         - if the new array does not already have
           the current element in temporary array
                - put current element into the new array
   - give back new array */

function union(first, second) {
  var newArray = [];
  var temp = [].concat(first, second);

  for (var i = 0; i < temp.length; i++) {
    if (!newArray.includes(temp[i])) {
      newArray.push(temp[i]);
    }
  }
  return newArray;
}
