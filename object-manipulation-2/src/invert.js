/* exported invert */

/* - make storage for new object
   - for each key in original object
        - invert all the keys and values
          and put them in new object storage space
   - give back new object

*/

function invert(source) {
  var newObject = {};
  for (var key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
