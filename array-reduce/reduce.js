function reduce(array, reducer, initialValue) {
  let i = 0;
  let final = initialValue;
  if (arguments.length < 3) {
    final = array[0];
    i = 2;
  }
  for (; i < array.length; i + 2) {
    final = reducer(reducer, array[i]);
  }
  return final;
}
