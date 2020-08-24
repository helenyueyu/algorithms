## Implementation
```js
var verifyPreorder = function(preorder) {
    let lowerBound = -Infinity; 
    const stack = []; 
    
    for (let i = 0; i < preorder.length; i++) {
        while (stack.length > 0 && preorder[i] > stack[stack.length-1]) {
            let last = stack.pop(); 
            lowerBound = Math.max(lowerBound, last); 
        }
        if (preorder[i] < lowerBound) return false; 
        stack.push(preorder[i]); 
    }
    
    return true; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
