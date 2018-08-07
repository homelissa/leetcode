/*
Binary Tree Preorder Traversal
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
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
var preorderTraversal = function(root) {
    let list = [];
    helper(root, list);
    return list;
};

var helper = function(root, list) {
    if (root === null) {
        return;
    }

    list.push(root.val);
    helper(root.left, list);
    helper(root.right, list);
}
