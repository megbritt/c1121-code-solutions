/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  if (!list.next) {
    return list;
  }
  const rest = list.next;
  const newEntry = new LinkedList(value);
  newEntry.next = rest;
  list.next = newEntry;
  return list;
}
