function filter(array, predicate) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
