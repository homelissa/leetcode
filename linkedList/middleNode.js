/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    console.log(head)
    let length = getListLength(head);
    let index = length % 2 === 1 ? Math.ceil(length / 2) : (length / 2) + 1
    for (i = 1; i < index; i++) {
        head = head.next;
    }
    return head;
};

var getListLength = function(head) {
    let count = 0;
    while (head !== null) {
        count += 1;
        head = head.next;
    }
    return count;
}
