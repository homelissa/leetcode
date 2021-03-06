/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
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

 var deleteDuplicates = function(head) {
    let nullHead = new ListNode(null);
    nullHead.next = head;
    let prev = nullHead;
    let current = head;

    while (current && current.next) {
        let temp = current.next;
        if (current.val === temp.val) {
            prev.next = temp;
            current = temp;
        } else {
            prev = current;
            current = current.next;
        }
    }

    return nullHead.next;
};

 var deleteDuplicates = function(head) {
     let nullHead = new ListNode(null);
     nullHead.next = head;
     let prev = nullHead;
     let current = head;

     while (prev != null && prev.next != null) {
         if (prev.val === current.val) {
             prev.next = current.next;
             current = current.next;
         } else {
             prev = current;
             current = current.next;
         }
     }

     return nullHead.next;
 };

var deleteDuplicates = function(head) {
  let current = head;
  while (current != null && current.next != null) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head;
}
