/*
Binary Tree Inorder Traversal
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
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
var inorderTraversal = function(root) {
    let list = [];
    helper(root, list);
    return list;
};

var helper = function(root, list) {
    if (root === null) {
        return;
    }

    helper(root.left, list);
    list.push(root.val);
    helper(root.right, list);
}
