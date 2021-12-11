/* exported getValues */

/* - storage to hold items
   - for each property in the object,
       - take value  of each property in the
          object and store that in new storage
   - give back new storage */

function getValues(object) {
  var objArray = [];

  for (var property in object) {
    objArray.push(object[property]);
  }
  return objArray;
}
