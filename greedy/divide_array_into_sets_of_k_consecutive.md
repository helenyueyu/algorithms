## Implementation
```js
var isPossibleDivide = function(nums, k) {
    if (nums.length === 0) return false; 
    if (nums.length % k !== 0) return false; 
    const h = {}; 
    
    for (let i = 0; i < nums.length; i++) {
        if (h[nums[i]] === undefined) {
            h[nums[i]] = 1; 
        } else {
            h[nums[i]]++; 
        }
    }
    
    while (Object.values(h).length > 0) {
        let min = Math.min(...Object.keys(h)); 
        for (let i = min; i < min+k; i++) {
            if (h[i] === undefined) return false; 
            h[i]--; 
            if (h[i] === 0) delete h[i]; 
        }
    }
    
    return Object.values(h).length === 0; 
};
```

## Complexity
Time: `O(n) + O(n/k * k)`
Space: `O(n)`
