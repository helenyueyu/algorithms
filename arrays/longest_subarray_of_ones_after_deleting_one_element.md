## Problem
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.

Return 0 if there is no such subarray.

## Overview
Group together the zeroes and the ones into clusters. 

Several edge cases: 

* If there are only `1`s, we want to return the `length - 1`. 
* If there are no `0`s that have length `1`, we cannot "combine" any of the 1 blocks, and so we just return the largest `1` block. 


## Implementation
```js
var longestSubarray = function(nums) {
    if (nums.every(x => x === 1)) return nums.length-1; 
    let zeroStarts = false; 
    const ones = []; 
    const zeroes = []; 
    let i = 0; 
    
    if (nums[0] === 0) zeroStarts = true; 
    while (i < nums.length) {
        if (nums[i] === 0) {
            let sum = 0; 
            while (nums[i] === 0) {
                sum += 1; 
                i++; 
            }
            zeroes.push(sum); 
        } else {
            let sum = 0; 
            while (nums[i] === 1) {
                sum += 1; 
                i++; 
            }
            ones.push(sum); 
        }
    }
   
    let max = 0; 
    if (ones.length === 1) return ones[0]; 
    
    for (let i = 0; i < ones.length-1; i++) {
        if (zeroStarts === true) {
            if (zeroes[i+1] === 1) {
                 max = Math.max(max, ones[i] + ones[i+1]); 
            }
        } else {
            if (zeroes[i] === 1) {
                 max = Math.max(max, ones[i] + ones[i+1]); 
            }
        }
            
    }
    
    return Math.max(max, Math.max(...ones))
};
```

## Complexity
Time: `O(n)`: Iterate multiple times, but each one is separate and linear. 
Space: `O(n)` : Storage for the `zeroes` and `ones` arrays. 