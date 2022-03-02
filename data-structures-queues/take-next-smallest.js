/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    let first = queue.dequeue();
    const second = queue.peek();
    if (second === undefined) {
      return first;
    } else {
      while (first > queue.peek()) {
        queue.enqueue(first);
        first = queue.dequeue();
      }
      return first;
    }

  }
}
