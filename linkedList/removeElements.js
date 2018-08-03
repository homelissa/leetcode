/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   let nullHead = new ListNode(null);
   nullHead.next = head;
   let prev = nullHead;
   let current = head;

   while (prev != null && prev.next != null) {
       if (current.val === val) {
           prev.next = current.next;
           current = prev.next;
       } else {
           prev = current;
           current = current.next;
       }
   }

   return nullHead.next;
};
