## Overview
Given 3 positive numbers `a`, `b`, and `c`, return the minimum number of flips required in `a` and `b` to make `(a | b) === c`. Flipping consists of changing a single bit from `1` to `0` or from `0` to `1`. 

We want to return the minimum flips to make `a | b === c`. When do we need to make a flip on a bit in either `a` or `b`? Either: 

1. The bit for `a|b` is `0` and the bit for `c` is `1`. 
    * We only need one step (pick the bit for either `a` or `b` and change it from `0` to `1` is sufficient). 
2. The bit for `a|b` is `1` and the bit for `c` is `0`. 
    * We need exactly `1` step if precisely one of the bits in either `a` or `b` is already `0`. 
    * Otherwise, we need `2` steps. 

We know that: `(a|b)^c` will return true if either of the above cases occurs. 

We know `a & b & ((a|b)^c)` will return true only if the bits for `a` and `b` are both `1` and `1`, and the bit at `c` is `0`. 

## Implementation
```js
var minFlips = function(a, b, c) {
    const singleOnes = (a|b)^c; 
    const doubleOnes = a & b & ((a|b)^c); 
    return countOnes(singleOnes) + countOnes(doubleOnes); 
};

function countOnes(n) {
    let count = 0; 
    while (n > 0) {
        count += n & 1; 
        n >>= 1; 
    }
    return count; 
}
```