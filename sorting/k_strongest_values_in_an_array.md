## Overview
We sort the array, and then use the two pointer technique to pick the `k` elements furthest away from the median. 

Note: We use the problem's definition of a median. 

## Implementation
```js
var getStrongest = function(arr, k) {
    let res = []; 
    
    arr = arr.sort((a,b) => a < b ? -1 : 1); 
    
    let i = 0; 
    let j = arr.length-1; 
    let mid = Math.floor((arr.length - 1)/2); 

    while (k > 0) {
        let left = Math.abs(arr[i] - arr[mid]); 
        let right = Math.abs(arr[j] - arr[mid]); 
        if (left > right) {
            res.push(arr[i]); 
            i++; 
        } else {
            res.push(arr[j]); 
            j--; 
        }
        k--; 
    }
    
    return res; 
};
```

## Complexity
Time: `O(nlogn)`
Space: `O(1)` - if we don't count mutating the original input 