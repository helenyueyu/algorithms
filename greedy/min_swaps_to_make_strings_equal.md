## Overview
We notice something: 

```js
s1 = "xx"
s2 = "yy" 

s1 = "yy" 
s2 = "xx"
// this takes one swap 

s1 = "xy"
s2 = "yx"

s1 = "yx"
s2 = "xy"
// this takes two swaps 
```

So the crux is to make **as many** one swaps as possible, until we can no longer make any. Each pair of `xy`'s that we see (we can make one swap with), and each pair of `yx`s that we see, we can also make one swap. We are going to be left with a remainder of 1 for each `yx` and `xy` (or maybe not). 

The only thing we have to be a little wary over is if the `x` count (or the `y` count) is odd. Then it is not possible, as we cannot split `x` evenly between two strings. 

## Implementation
```js
var minimumSwap = function(s1, s2) {
    let xCount = 0; 
    const h = [0, 0]; // [xy, yx] counts 
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === 'x') xCount++; 
        if (s2[i] === 'x') xCount++; 
        if (s1[i] !== s2[i]) {
            if (s1[i] === 'x') {
                h[0]++;  
            } else {
                h[1]++; 
            }
        }
    }
    if (xCount % 2 !== 0) return -1; 

    let count = Math.floor(h[0]/2) + Math.floor(h[1]/2); 

    if (h[0] % 2 !== 0 && h[1] % 2 !== 0) count+=2; 
    return count; 
};
```

## Complexity
Time: `O(n)`
Space: `O(1)`