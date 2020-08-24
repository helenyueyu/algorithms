## Implementation
```js
var productExceptSelf = function(nums) {
    const n = nums.length; 
    
    const before = new Array(n).fill(1); 
    const after = new Array(n).fill(1); 
    
    for (let i = 1; i < n; i++) {
        before[i] = nums[i-1] * before[i-1]; 
    }
    for (let j = n-2; j >= 0; j--) {
        after[j] = nums[j+1] * after[j+1]; 
    }
    
    const res = []; 
    for (let i = 0; i < n; i++) {
        res[i] = before[i] * after[i]; 
    }
    
    return res; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
