/*
Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

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
var addTwoNumbers = function(l1, l2, carry) {
   if (!l1 && !l2 && !carry) return null;

   const int1 = l1 ? l1.val : 0;
   const int2 = l2 ? l2.val : 0;

   if(!carry) carry = 0;

   let sum = int1 + int2 + carry;
   carry = Math.floor(sum / 10);
   sum = sum % 10;

   const node = new ListNode(sum);

   const next1 = l1 ? l1.next : null;
   const next2 = l2 ? l2.next : null;
   node.next = addTwoNumbers(next1, next2, carry);

   return node;

};
