/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const first = queue.dequeue();
    const second = queue.dequeue();
    queue.enqueue(first);
    if (second === undefined) {
      return first;
    }
    return second;
  }

}
