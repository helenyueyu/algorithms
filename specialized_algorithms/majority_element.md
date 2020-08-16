## Overview
**Boyer-Moore Voting Algorithm**! 

So this one is a bit interesting...but basically we select a **tentative** candidate. We then iterate through the array

* If our current element is equal to the candidate, we increment our counter. 
* If our current element is smaller than our candidate, we decrement our counter.

Basically, our counter is a litmus test for whether the current element is a **majority** in the chunk that we are currently processing. If the counter dips below **0**, then **AT THAT POINT**, that specific candidate is out of the running (but note that if this is true, and that candidate was the majority after all, then we should pick it and it should be the majority of some later chunk in the array). 

This is totally not intuitive but super cool nevertheless!

## Implementation
```js
var majorityElement = function(nums) {
    let majorityCandidate = nums[0]; 
    let count = 1; 
    for (let i = 1; i < nums.length; i++) {
        if (majorityCandidate === nums[i]) {
            count++; 
        } else {
            count--; 
        }
        if (count < 0) {
            majorityCandidate = nums[i]; 
            count = 1; 
        }
    }
    
    let freq = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === majorityCandidate) freq++; 
    }
    
    return freq >= Math.ceil(nums.length/2) ? majorityCandidate : -1; 
};
```

## Complexity
Time: `O(n)`
Space: `O(1)`
