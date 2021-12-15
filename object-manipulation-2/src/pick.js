/* exported pick */

/* - make new storage space for resulting object
   - for each property in the object
        - make new temporary storage space to store source object property
        - if that property is one we were looking for, and temporary storage
          space is not undefined
              - put property in resulting object
  - give back resulting object
*/

function pick(source, keys) {
  var result = {};

  for (var key in source) {
    var v = source[key];
    if (keys.includes(key) && v !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
