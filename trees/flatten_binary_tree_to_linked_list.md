## Implementation
```js
var flatten = function(root) {
    if (!root) return null; 
    
    let head = flatten(root.left);  
    let tail = flatten(root.right); 
    
    let h = head; // null 
    while (h && h.right) {  
        h = h.right; 
    }
    if (h) h.right = tail; 
    
    root.left = null;
    root.right = head !== null ? head : tail; 
    return root; 
};
```

## Complexity
Time: `O(n)`
Space: `O(h)`
