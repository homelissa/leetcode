/*
Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {

  let sum = 0;
  let queue = [];

  if (root != null) {
    queue.push(root);
  }

  while (queue.length > 0) {
    let maxWidth = queue.length;

    for (let width = 0; width < maxWidth; width++) {
        current = queue.unshift();

      if (current.left && current.left.left === null && current.left.right === null) {
        // found a left leaf
        sum += current.left.val;
        queue.push(current.left);
      }

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }

    }
  }

  return sum;

};
