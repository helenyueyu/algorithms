## Revisit 

## Overview
The brute force solution, iterating through all the numbers from `m` to `n`, doing bitwise `&` for each iteration. Note that we make every single bit `0`, there is no need to continue the loop, and we are down (we return early). 

## Implementation
```js
var rangeBitwiseAnd = function(m, n) {
    let res = m; 
    for (let i = m+1; i <= n; i++) {
        res &= i;
        if (res === 0) return 0; 
    }
    return res; 
};
```

Time: `O(n)`, where `n` is `n-m`. 
Space: `O(1)`. 


## More Optimal Overview
Need to revisit this question

```js
var rangeBitwiseAnd = function(m, n) {
    while (m < n) {
        n = n & (n-1); 
    }
    return m & n; 
};
```
