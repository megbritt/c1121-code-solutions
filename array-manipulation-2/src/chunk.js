/* exported chunk */

/* Optional Challenge Solution */

/* Not Using the slice() Method */

/* - make storage space for list for new items (original value = [])
   - make storage to keep track as a counter (original value = 0)
   - make storage to keep track of new length, which would be the
     amount of items stored in the list of original storage divided by
     desired size
   - make storage for remaining items (original value = null)
   - for each item until new length
        - make storage for a second new list
        - for each item (element) until desired size
              - put new item to list
              - increment counter
        - take the values in list in second new list and assign to
          first new list
   - for remaining items, you want to get the remainder of original list
     divded by desired size. store remainder into storage for remaining
     items
   - if there is at least one item in the storage for remaining items,
        - make storage for a third new list
        - for each item in remaining items
              - store each item in third new list
              - increment counter
        - take the values in list in third new list and assign to
          first new list
   - give back irst new list */

function chunk(array, size) {
  var newArray = [];
  var index = 0;
  var newLengthOfResultingArray = Math.floor(array.length / size);
  var remainingItems = null;
  for (var i = 0; i < newLengthOfResultingArray; i++) {
    var t = [];
    for (var j = 0; j < size; j++) {
      t.push(array[index]);

      index++;
    }
    newArray.push(t);
  }
  remainingItems = array.length % size;
  if (remainingItems > 0) {
    var x = [];
    for (var k = 0; k < remainingItems; k++) {
      x.push(array[index]);
      index++;
    }
    newArray.push(x);
  }
  return newArray;
}

/* Alternate Solution (My First Solution)

/* Using the slice() Method */

/* - make storage space for list for new items (original value = [])
   - for each item in the list
        - make storage for the desired chunk size, and slice the list
          such that it gives back a shallow copy of a portion of
          said list into a new list
        - put portion of said list into first new list
   - give back first new list  */

/* function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    newArray.push(chunk);
  }
  return newArray;
} */
