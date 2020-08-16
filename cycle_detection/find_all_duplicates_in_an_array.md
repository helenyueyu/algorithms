## Problem
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

## Overview 
We are going to do a cycle detection algorithm. Keep swapping elements to put them in their rightful place (a swap will at least be **partially beneficial** - will help at least one element be sorted back in it's rightful slot, if not **mutually beneficial** (help both)). 


## Implementation
```js
var findDuplicates = function(nums) {
    nums = [0].concat(nums); 
    
    const res = new Set(); 
    for (let i = 0; i < nums.length; i++) {
        if (i === nums[i]) continue; 
        while (i !== nums[i]) {
            if (nums[nums[i]] === nums[i]) {
                res.add(nums[i]); 
                break; 
            }
            let temp = nums[nums[i]]; 
            nums[nums[i]] = nums[i]; 
            nums[i] = temp; 
        }
    }
    
    return Array.from(res); 
};
```

## Complexity
Time: `O(n)`
Space: `O(1)`