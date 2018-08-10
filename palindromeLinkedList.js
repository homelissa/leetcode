/*
234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/


var getReversedList = function(head) {
  let prev = null;
  let current = head;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}

var isPalindrome = function(head) {
    let reversed = getReversedList(head);

    while (head && reversed) {
      if (head.val != reversed.val) {
        return false;
      }
      head = head.next;
      reversed = reversed.next;
    }

  return true;
};
