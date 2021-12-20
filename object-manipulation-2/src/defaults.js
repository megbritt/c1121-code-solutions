/* exported defaults */

/* - make storage space to keep track of properties in objects
     (original value of storage space = null; left blank intentionally im)
   - for each property in source object, if target object does not have
     the property, it get's the source object's property. target object
     never gets reassigned another value if target object already has the
     defined property
*/

function defaults(target, source) {
  var key = null;
  for (key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
