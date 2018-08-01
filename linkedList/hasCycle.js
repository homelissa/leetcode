function hasCycle(head) {
  let slow = head;
  let fast = head;

  if (!head || !head.next) {
    return false;
  }

  if (head.next === head) {
    return true;
  }

  while (fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
