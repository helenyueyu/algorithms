## Implementation
```js
var containsNearbyDuplicate = function(nums, k) {
    const h = {}; 
    for (let i = 0; i < nums.length; i++) {
        if (h[nums[i]] !== undefined) {
            if (i - h[nums[i]] <= k) return true; 
        }
        h[nums[i]] = i; 
    }
    return false; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
