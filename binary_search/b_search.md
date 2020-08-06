## Overview
We use pointers and update our mid by taking the average of our `start` and `end` pointer. If we ever reach the case where `start > end`, we return `-1` to signal that no such index exists. 

## Implementation
```js
var search = function(nums, target, start = 0, end = nums.length-1) {
    if (start > end) return -1; 
    const mid = Math.floor((start + end)/2); 
    
    if (target < nums[mid]) {
        return search(nums, target, start, mid-1); 
    } else if (target > nums[mid]) {
        return search(nums, target, mid+1, end); 
    } else {
        return mid; 
    }
};
```

## Complexity
Time: `O(log n)`
Space: `O(1)`
