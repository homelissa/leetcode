var getLength = function(head) {
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }

  return length;
}

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let p1 = headA;
  let p2 = headB;
  let lengthA = getLength(headA);
  let lengthB = getLength(headB);

  if (lengthA <= lengthB) {
    for (let i = 0; i < lengthB - lengthA; i++) {
      p2 = p2.next;
    }
  } else {
    for (let i = 0; i < lengthA - lengthB; i++) {
      p1 = p1.next;
    }
  }

  while (p1 && p2 && p1 != p2) {
    p1 = p1.next;
    p2 = p2.next;

    if (!p1 || !p2) {
      return null;
    }
  }

  return p1;
}
