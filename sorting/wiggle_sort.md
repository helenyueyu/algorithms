## Implementation

```js
var wiggleSort = function(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        if (i % 2 === 0) {
            if (nums[i] > nums[i+1]) swap(nums, i, i+1); 
        } else {
            if (nums[i] < nums[i+1]) swap(nums, i, i+1); 
        }
    }
};

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]; 
}
```

## Complexity
Time: `O(n)`
Space: `O(1)`
