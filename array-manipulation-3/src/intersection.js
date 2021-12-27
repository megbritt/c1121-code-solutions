/* exported intersection */

/* - make storage for new array (initial value = [])
   - make storage for temporary array (initial value = [])
   - for each element in the first array
       - for each element in the second array
            - check if current element in the first array is
              the same as the corresponding current element
              in the second array
                  - if they are the same
                        - put the aforementioned element into
                          the temp array
   - for each element in the temp array
            - check if current element in the temp array is not yet
              in the new array
                  - if aforementioned element is not yet in the new array
                        - put the aforementioned element into
                          the new array
   - give back new array */

function intersection(first, second) {
  var newArray = [];
  var temp = [];

  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        temp.push(first[i], second[j]);
      }
    }
  }

  for (var k = 0; k < temp.length; k++) {
    if (!newArray.includes(temp[k])) {
      newArray.push(temp[k]);
    }
  }
  return newArray;
}
