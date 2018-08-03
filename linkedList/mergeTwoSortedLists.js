/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(null);
    let current = result;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;

    }

    while (l2) {
        current.next = l2;
        current = current.next;
        l2 = l2.next;
    }

    while (l1) {
        current.next = l1;
        current = current.next;
        l1 = l1.next;
    }

    return result.next;
};
