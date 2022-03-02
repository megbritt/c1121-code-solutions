/* exported removeNext */

function removeNext(list) {
  if (!list.next) {
    return list;
  }
  list.next = list.next.next;
}
