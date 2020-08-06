## Overview
if (arr[i-1] < arr[i] && arr[i+1] < arr[i]) we found the peak 

**4 cases**: 
1. /\ 
2. \/  - search either the left or the right (left then), since we are guaranteed that a peak exists 
3. // - search on the right 
4. \\ - search on the left 


## Implementation
```js
var findPeakElement = function(nums, start = 0, end = nums.length-1) {
    if (start > end) return -1; 
    const mid = Math.floor((start + end)/2); 
    const el = nums[mid]; 
    const left = nums[mid-1] === undefined ? -Infinity : nums[mid-1]; 
    const right = nums[mid+1] === undefined ? -Infinity : nums[mid+1]; 
    
    if (el > left && el > right) {
        return mid; 
    } else if (el > left) {
        return findPeakElement(nums, mid+1, end); 
    } else {
        return findPeakElement(nums, start, mid-1); 
    }
};
```

## Complexity
Time: `O(log n)`
Space: `O(1)`