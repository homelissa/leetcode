/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

//relies on DFS in order traversal

 var kthSmallest = function(root, k) {
   let stack = [];
   let count = 0;
   let node = root;

   while (true){
     if (node){
         stack.push(node);
         node = node.left;
     } else {
         if (stack.length == 0) break;
         node = stack.pop();
         count += 1;
         if (count == k) return node.val;
         node = node.right;
     }
   }
 };
