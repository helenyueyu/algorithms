## Try to figure out optimal solution that doesn't use a loop or recursion 

## Overview
The idea is to check first to make sure the item is at least a **power of 2** (this is a necessary, but not sufficient condition to ensure that the number is potentially a **power of 4**). The next thing we do is a while loop, where we shift the leftmost one bit (we have guaranteed exactly 1 bit, since our number is a power of 2) two steps to the right. If we ever see that `num === 1`, we know that the leftmost `1` bit is at an even index, which is a sufficient condition to ensure this number is a power of 4. 

## Implementation
```js
var isPowerOfFour = function(num) {
    if (num <= 0) return false; 
    if ((num & (num-1)) !== 0) return false; 
    while (num > 0) {
        if (num === 1) return true; 
        num >>= 2; 
    }
    return false; 
};
```