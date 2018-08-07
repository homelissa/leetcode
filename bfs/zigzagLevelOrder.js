/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

var zigzagLevelOrder = function(root) {
// Base cases
    if (root === null) return [];
    if (root.left === null && root.right === null) return [[root.val]];

    let result = [];

// Zigzag direction
    let goingRight = true;

// BFS
    let queue = [root];
    while (queue.length !== 0) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let curr = queue.shift();
            level.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
// Reverse the sublevel array if not going from left to right
        if (!goingRight) level.reverse();
        result.push(level);

// Change direction
        goingRight = !goingRight;
    }
    return result;
};
