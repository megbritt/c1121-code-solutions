/* exported getLength */

function getLength(list) {
  let len = 0;
  while (list !== null) {
    list = list.next;
    len++;
  }
  return len;
}
