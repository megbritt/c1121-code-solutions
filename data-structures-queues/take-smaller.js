/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const first = queue.dequeue();
    const second = queue.dequeue();
    if (second !== undefined) {
      if (first > second) {
        queue.enqueue(first);
        return second;
      } else {
        queue.enqueue(second);
        return first;
      }
    }
    return first;

  }
}
