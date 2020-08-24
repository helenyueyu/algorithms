## Overview
The idea is that a string can be rearranged to be a **palindrome** if and only if: 

* the number of odd frequency characters is `0` or `1`

The idea with the **greedy approach** is we want to try to remove as many **odd frequency** characters as possible (which we can trivially do by creating a string of length 1). Thinking about it this way, we can slowly decompose the string into the following way: 

```js
"c" // (string of length 1)
 + remainder of string (with oddCount of one of the characters decremented) 
```

## Implementation
```js
var canConstruct = function(s, k) {
    const h = {}; 
    
    for (let i = 0; i < s.length; i++) {
        h[s[i]] = h[s[i]] === undefined ? 1 : 1 + h[s[i]]; 
    }
    
    let oddCount = 0; 
    for (let k in h) {
        if (h[k] % 2 !== 0) oddCount++; 
    }
    return oddCount <= k && k <= s.length; 
};
```

## Complexity
Time: `O(n)`
Space: `O(1)`
