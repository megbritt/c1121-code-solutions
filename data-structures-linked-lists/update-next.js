/* exported updateNext */
function updateNext(list, value) {

  if (!list.next) {
    return list;
  }
  list.next.data = value;
  return list;
}
