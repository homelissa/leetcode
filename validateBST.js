/*
Validate Binary Search Tree
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:

Input:
    2
   / \
  1   3
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6
Output: false
Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
             is 5 but its right child's value is 4.

*/

var isValidBST = function(root) {
  if(root === null) return true;

  const stack = [{ node: root, minimum: -Infinity, maximum: Infinity }];

  while(stack.length) {
    const { node, minimum, maximum } = stack.pop();
    if(node.val <= minimum || node.val >= maximum) return false;

    if(node.left !== null) {
      stack.push({ node: node.left, minimum, maximum: node.val });
    }

    if(node.right !== null) {
      stack.push({ node: node.right, minimum: node.val , maximum });
    }
  }

  return true;
};

// var isValidBST = function(root) {
//   let queue = [];
//
//   if (!root) {
//     queue.push(root)
//   }
//
//   while (queue.length > 0) {
//     let maxWidth = queue.length;
//
//     for (let width = 0; width < maxWidth; width++) {
//       let currNode = queue.unshift();
//
//       if (currNode.left) {
//         if (currNode.left.val > currNode.val) {
//           return false;
//         }
//         queue.push(currNode.left);
//       }
//
//       if (currNode.right) {
//         if (currNode.right.val < currNode.val) {
//           return false;
//         }
//         queue.push(currNode.right);
//       }
//     }
//   }
//
//   return true;
// };
