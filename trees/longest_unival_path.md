## Implementation
```js
var longestUnivaluePath = function(root) {
    if (!root) return 0; 
    let max = 0; 
    
    function recursion(root) {
        if (!root) return [-1, -1]; 
        
        let [ll, lr] = recursion(root.left); 
        let [rl, rr] = recursion(root.right); 
        
        let left = 0; 
        let right = 0; 
        
        if (root.left && root.val === root.left.val) {
            left = Math.max(ll, lr); 
        }
        if (root.right && root.val === root.right.val) {
            right = Math.max(rl, rr); 
        }
        
        max = Math.max(max, left + right); 
        return [1 + left, 1 + right]; 
    }
    recursion(root); 
    return max; 
};
```

## Complexity
Time: `O(n)`
Space: `O(h)`
