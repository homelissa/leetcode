/*
Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

Case 1: Node has right subtree: Go deeep to left most node in right subtree
Case 2: No right subtree: Go to the nearest ancestor for which given node would be in the left subtree

*/

var inorderSuccessor = (root, node) => {
  var nextLargest = null;

  if (node.right != null) {
    // return the smallest item in the right subtree
    nextLargest = node.right
    while (nextLargest.left != null) {
      nextLargest = nextLargest.left;
    }

    return nextLargest;
  } else {
      successor = null;
      ancestor = root;

      while (ancestor != node) {
        if (node.val < ancestor.val) {
          successor = ancestor;
          ancestor = ancestor.left;
        } else {
          ancestor = ancestor.right;
        }
      }

    return successor;
  }

}
