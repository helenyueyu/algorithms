## Implementation
```js
var pruneTree = function(root) {
    return recursion(root); 
};

function recursion(root) {
    if (!root) return null; 
    
    root.left = recursion(root.left); 
    root.right = recursion(root.right); 
    
    if (!root.left && !root.right && root.val === 0) {
        return null; 
    } else {
        return root; 
    }
}
```

## Complexity
Time: `O(n)`
Space: `O(h)`, where `h` is the height of the tree. 

