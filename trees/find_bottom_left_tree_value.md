## Implementation
```js
var findBottomLeftValue = function(root) {
    if (!root) return null; 
    
    const res = recursion(root); 
    return res[res.length-1]; 
};

function recursion(root) {
    if (!root) return []; 
    
    let l = recursion(root.left); 
    let r = recursion(root.right); 
    
    for (let i = 0; i < l.length; i++) {
        r[i] = l[i]; 
    }
    
    return [root.val].concat(r); 
}
```

## Complexity
Time: `O(n)`
Space: `O(h)`
