/*
You need to find the largest value in each row of a binary tree.

Example:
Input:

          1
         / \
        3   2
       / \   \
      5   3   9

Output: [1, 3, 9]

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
var largestValues = function(root) {
  let queue = [];
  let result = [];

  if (!root) {
      queue.push(root);
  }

  while (queue != null) {
    let maxWidth = queue.length;
    let largest = queue[0].val;

    for (let width = 0; width < maxWidth; width++) {
        let currNode = queue.unshift();

        if (currNode.val > largest) {
            largest = currNode.val;
        }

        if (currNode.left) {
            queue.push(currNode.left);
        }

        if (currNode.right) {
            queue.push(currNode.right);
        }
    }

    result.push(largest);
  }

  return result;
};
