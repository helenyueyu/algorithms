## Implementation
```js
var isCousins = function(root, x, y) {
    if (!root) return false; 
    const h = {}; 
    
    const q = [[root, 0, -1]]; 
    
    while (q.length > 0) {
        const [node, level, parent] = q.shift(); 
        
        if (h[level] === undefined) {
            h[level] = {}; 
        }
        h[level][node.val] = parent; 
        
        let p1 = h[level][x]; 
        let p2 = h[level][y]; 
        if (p1 !== undefined && p2 !== undefined) {
            return p1 !== p2; 
        }
        
        if (node.left) q.push([node.left, level+1, node.val]); 
        if (node.right) q.push([node.right, level+1, node.val]); 
    }
    
    return false; 
};
```