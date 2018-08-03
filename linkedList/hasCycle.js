var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    if (!fast || !fast.next) {
        return false;
    }

    while (slow && fast && slow.next != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};
