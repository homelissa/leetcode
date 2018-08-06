/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
*/

var minDepth = function(root) {
    var minDepth = Infinity;

    if (root === null) {
        return 0;
    }

    function find(node, depth = 1) {
        if (node.left === null && node.right === null) {
            if (depth < minDepth) {
                minDepth = depth;
                if (minDepth === 1) {
                    return;
                }
            }
        }

        if (node.left !== null) {
            find(node.left, depth+1);
        }

        if (node.right !== null) {
            find(node.right, depth+1);
        }
    }

    find(root);

    return minDepth;
};
