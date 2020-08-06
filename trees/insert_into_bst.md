## Overview
If there is no root, we create a new node. 

Otherwise, we compare the current value of our root node with the value we're trying to insert. If the value we're trying to insert is smaller than our root, we call `insertBST` on the left subtree. Otherwise, we call `insertBST` on the right subtree, and repeat the process recursively until we reach a `null` node. 

## Implementation
```js
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val); 
    
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val); 
    } else {
        root.left = insertIntoBST(root.left, val); 
    }
    return root; 
};
```

## Complexity
Time: `O(h)`, where `h` is the height of the tree. Worse case, `h = n`, but on average, `h = log n`.  
Space: `O(h)`, to hold our recursive stacks. 