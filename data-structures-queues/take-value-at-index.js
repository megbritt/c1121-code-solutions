/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      return queue.dequeue();
    } else {
      const temp = queue.dequeue();
      if (typeof queue.peek() === 'undefined') {
        return temp;
      }
      queue.enqueue(temp);
    }
  }
}
