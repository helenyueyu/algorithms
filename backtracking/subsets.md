## Implementation
```js
var subsets = function(nums) {
    const res = []; 
    backtrack([], res, 0, nums); 
    return res; 
};

function backtrack(curr, res, idx, nums) {
    res.push(curr.slice(0)); 
    
    for (let i = idx; i < nums.length; i++) {
        curr.push(nums[i]); 
        backtrack(curr, res, i+1, nums); 
        curr.pop(); 
    }
}
```

## Complexity
Time: `O(2^n)`
Space: `O(2^n)`
