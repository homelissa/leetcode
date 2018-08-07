/*
Binary Tree Postorder Traversal
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
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
 
var postorderTraversal = function(root) {
    let list = [];
    let stack = [];

    if (root != null) {
        stack.push(root);
    }

    while (stack.length > 0) {
        let currNode = stack.pop();
        list.unshift(currNode.val);

        if (currNode.left) {
            stack.push(currNode.left);
        }

        if (currNode.right) {
            stack.push(currNode.right);
        }
    }

    return list;
};
