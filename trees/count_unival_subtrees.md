## Implementation

```js
var countUnivalSubtrees = function(root) {
    if (!root) return 0; 
    
    let count = 0; 
    
    const q = [root]; 
    while (q.length > 0) {
        let node = q.shift();
    
        if (isUnival(node)) count++; 
        
        if (node.left) q.push(node.left); 
        if (node.right) q.push(node.right); 
    }
    
    return count; 
};

function isUnival(root, val=root.val) {
    if (!root) return true; 
    return root.val === val && isUnival(root.left, val) && isUnival(root.right, val); 
}

```

## Complexity
Time: `O(n*log(n))`
Space: `O(n)`

