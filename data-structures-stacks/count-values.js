/* exported countValues */

function countValues(stack) {
  let counter = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    counter++;
  }
  return counter;
}
