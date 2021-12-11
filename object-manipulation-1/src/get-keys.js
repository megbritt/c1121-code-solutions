/* exported getKeys */

/* - storage to hold items
   - for each property in the object,
       - take key of each property in the
          object and store that in new storage
   - give back new storage */

function getKeys(object) {
  var objArray = [];

  for (var property in object) {
    objArray.push(property);
  }
  return objArray;
}
