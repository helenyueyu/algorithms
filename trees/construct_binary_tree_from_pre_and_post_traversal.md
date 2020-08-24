## Implementation
```js
var constructFromPrePost = function(pre, post) {
    if (pre.length === 0) return null; 
    
    let root = new TreeNode(pre[0]); 
    pre.shift(); 
    post.pop(); 
    
    let left = pre[0]; 
    let i = 0; 
    while (i < post.length) {
        if (left === post[i]) break; 
        i++; 
    }
    
    root.left = constructFromPrePost(pre.slice(0, i+1), post.slice(0, i+1)); 
    root.right = constructFromPrePost(pre.slice(i+1), post.slice(i+1)); 
    return root; 
};
```

## Complexity
Time: `O(n)` - maybe another `n` because we are slicing?
Space: `O(h)`
