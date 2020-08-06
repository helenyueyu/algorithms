## Overview
The idea is to use the greedy method. We are going to take the elements with the highest frequency first, and keep removing elements this way until we've removed at least half of the elements from our array. 

## (Suboptimal) Implementation
```js
var minSetSize = function(arr) {
    let res = 0; 
    let count = 0;  
    const h = {}; 
    
    for (let i = 0; i < arr.length; i++) {
        if (h[arr[i]] === undefined) {
            h[arr[i]] = 1; 
        } else {
            h[arr[i]]++; 
        }
    }
    
    let freqs = Object.values(h).sort((a,b) => a < b ? 1 : -1); 
  
    while (count < Math.floor(arr.length/2)) {
        count += freqs.shift(); 
        res++; 
    }
    
    return res; 
};
```

## Complexity
Time: `O(n log n)`
Space: `O(n)`