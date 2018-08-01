/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:
*/

var reverseLinkedList = function(head) {
    let result = null;
    let stack = [];

    let current = head;
    while (current) {
      stack.push(current);
      current = current.next;
    }

    // Set head to end of list.
    result = stack.pop() || [];
    current = result;

    while (current) {
        current.next = stack.pop();
        current = current.next;
    }

    return result;
};
