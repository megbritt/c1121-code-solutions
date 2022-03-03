/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  while (list.next !== null) {
    list = list.next;
  }
  list.next = new LinkedList(value);
  return list;
}
