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

// recursive
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


// iterative

var preorderTraversal = function(root) {
    let stack = [];
    let result = [];
    let node = root;

    if (!node) {
        return [];
    }

    if (node === null) {
        return;
    }

    stack.push(node);

    while (stack.length > 0) {
        let currNode = stack.pop();
        result.push(currNode.val);

        if (currNode.right) {
            stack.push(currNode.right);
        }

        if (currNode.left) {
            stack.push(currNode.left);
        }
    }

    return result;
};
