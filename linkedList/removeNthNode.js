var removeNthFromEnd = function(head, n) {
    let nullHead = new ListNode(null);
    nullHead.next = head;
    let slow = nullHead;
    let fast = nullHead;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast != null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return nullHead.next;
};
