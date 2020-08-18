## Implementation
```js
var levelOrder = function(root) {
    if (!root) return []; 
    const res = []; 
    
    const q = [[root, 0]]; 
    
    while (q.length > 0) {
        const [node, height] = q.shift(); 
        
        if (res[height] === undefined) {
            res[height] = [node.val]; 
        } else {
            res[height].push(node.val); 
        }
        
        if (node.left) q.push([node.left, height+1]); 
        if (node.right) q.push([node.right, height+1]); 
    }
    
    return res; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
