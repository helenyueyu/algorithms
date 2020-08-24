## Implementation
```js
var findMode = function(root) {
    if (!root) return []; 
    
    let max = -Infinity; 
    const h = {}; 
    
    const q = [root]; 
    
    while (q.length > 0) {
        let node = q.shift(); 
        
        if (h[node.val] === undefined) {
            h[node.val] = 1; 
        } else {
            h[node.val]++; 
        }
        
        max = Math.max(max, h[node.val]); 
        
        if (node.left) q.push(node.left); 
        if (node.right) q.push(node.right); 
    }
    
    const modes = []; 
    for (let k in h) {
        if (h[k] === max) {
            modes.push(k); 
        }
    }
    
    return modes; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
