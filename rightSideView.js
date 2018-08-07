/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

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
 * @return {number[]}
 */


var rightSideView = function(root) {
  let queue = [];
  let rightView = [];

  if (root != null) {
    queue.push(root);
  }

  while (queue.length) {
    maxWidth = queue.length;
    let firstRight = true;

    for (let width = 0; width < maxWidth; width++) {
      let currNode = queue.unshift();

      if (firstRight) {
        rightView.push(currNode.val);
        firstRight = false;
      }

      if (currNode.right != null) {
        queue.push(currNode.right)
      }

      if (currNode.left != null) {
        queue.push(currNode.left)
      }
    }
  }

  return rightView;
}
