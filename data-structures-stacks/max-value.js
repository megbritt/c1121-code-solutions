/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return Number.NEGATIVE_INFINITY;
  } else {
    let largest = stack.peek();
    while (stack.peek() !== undefined) {
      if (stack.peek() > largest) {
        largest = stack.peek();
      }
      stack.pop();
    }
    return largest;
  }
}
