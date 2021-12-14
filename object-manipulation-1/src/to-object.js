/* exported toObject */

/* - create an object to store properties
   - the first item in storage will be the property
     given to the object, and the second item in storage
     will be the value given to aforementioned property
   - give back the new object */

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;

}
