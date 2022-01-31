function map(array, transform) {
  const newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(transform(array[i]));
  }

  return newArray;
}
