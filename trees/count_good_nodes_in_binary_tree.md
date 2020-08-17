## Implementation
```js
var goodNodes = function(root) {
    return recursion(root, -Infinity); 
};

function recursion(root, max) {
    if (!root) return 0; 
    if (!root.left && !root.right) {
        if (root.val >= max) return 1; 
        else return 0; 
    }
    max = Math.max(max, root.val); 
    let l = recursion(root.left, max); 
    let r = recursion(root.right, max); 
    
    if (root.val < max) {
        return l + r; 
    } else {
        return 1 + l + r; 
    }
}
```

## Complexity
Time: `O(n)`
Space: `O(n)`