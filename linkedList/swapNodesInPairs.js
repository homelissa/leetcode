/*
Swap Nodes In Pairs
Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
Note:

Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.
*/

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
var swapPairs = function(head) {

    if (head === null || head.next === null) {
        return head;
    }

    let nullHead = new ListNode(null);
    let prev = nullHead;

    while (head != null && head.next != null) {
        temp = head.next;
        head.next = temp.next;
        temp.next = head;
        prev.next = temp;
        prev = head;

        head = head.next;
    }

    return nullHead.next;
};
