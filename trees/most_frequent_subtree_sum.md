## Implementation
```js
var findFrequentTreeSum = function(root) {
    let max = -Infinity; 
    let h = {}; 
    function recursion(root) {
        if (!root) return 0; 
        
        let sum = root.val + recursion(root.left) + recursion(root.right); 
        
        if (h[sum] === undefined) {
            h[sum] = 1; 
        } else {
            h[sum]++; 
        }
        
        if (h[sum] > max) max = h[sum]; 
        return sum; 
    }
    recursion(root); 
    
    const res = []; 
    
    for (let k in h) {
        if (h[k] === max) {
            res.push(k); 
        }
    }
    
    return res; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
