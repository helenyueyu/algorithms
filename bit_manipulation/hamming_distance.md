## Overview
Simple use of the `n & (n-1)` trick (**Brian Kernighan's Algorithm**) to count the number of bits that `x` and `y` do not have in common. 

## Implementation
```js
var hammingDistance = function(x, y) {
    let count = 0; 
    
    let xor = x ^ y; 
    while (xor > 0) {
        xor = xor & (xor - 1); 
        count++; 
    }
    return count; 
};
```

Time: `O(1)`
Space: `O(1)`

## Discussion
The `XOR` operation takes constant time (why?). 
Worst case scenario, for bit counting, the time complexity would be `O(k)`, where `k` is number of ones in our integer. 
